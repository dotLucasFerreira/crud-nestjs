import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserMessage = UserM & Document;

@Schema()
export class UserM {
  @Prop({ required: true })
  id: number;
  @Prop({ required: true })
  text: string;
  @Prop({ required: true })
  from: string;
  @Prop({ required: true })
  to: string;
  @Prop()
  read?: boolean;
  @Prop({ default: () => new Date() })
  date: Date;
}

export const MessageSchema = SchemaFactory.createForClass(UserM);
