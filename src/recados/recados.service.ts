/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserM, UserMessage } from './menssage entity/menssage.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class RecadosService {
  constructor(@InjectModel(UserM.name) private userModel: Model<UserMessage>) {}

  async findAll(): Promise<UserM[]> {
    return await this.userModel.find().exec();
  }

  async create(data: Partial<UserM>): Promise <UserM> {
    const createdUserM = new this.userModel(data);
    return createdUserM.save()
  }

  async remove(id: number): Promise<boolean> {
    const delresult = await this.userModel.deleteOne({ id }).exec();
    return delresult.deletedCount > 0
  }
}
