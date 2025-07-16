/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Injectable } from '@nestjs/common';
import { UserM, UserMessage } from './menssage entity/menssage.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserMessageDto } from './menssage entity/create-message.dto';

@Injectable()
export class RecadosService {
  constructor(@InjectModel(UserM.name) private userModel: Model<UserMessage>) {}

  async create(data: UserMessageDto): Promise<UserM> {
    const createdUserM = await new this.userModel(data).save();
    return this.format(createdUserM);
  }

  async findAll(): Promise<UserM[]> {
    const allMessg = await this.userModel.find().exec();
    return allMessg.map((msg) => this.format(msg));
  }

  async findOne(id: string): Promise<UserM | null> {
    const oneMessg = await this.userModel.findById(id).exec();
    return oneMessg ? this.format(oneMessg) : null;
  }

  async update(
    id: string,
    updateData: Partial<UserMessageDto> = {},
  ): Promise<UserM | null> {
    const updatedMsg = await this.userModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
    return updatedMsg ? this.format(updatedMsg as UserMessage) : null;
  }

  async remove(id: string): Promise<boolean> {
    const deleteSuccess = await this.userModel.findByIdAndDelete(id).exec();
    return deleteSuccess !== null;
  }

  //ajuste de formato lido no JSON
  private format(user: UserMessage) {
    const obj = user.toObject();
    return {
      id: obj._id,
      text: obj.text,
      from: obj.from,
      to: obj.to,
      date: obj.date,
    };
  }
}
