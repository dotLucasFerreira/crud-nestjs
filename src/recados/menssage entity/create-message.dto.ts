import { IsDate, IsString, IsNumberString } from '@nestjs/class-validator';

export class UserMessageDto {
  @IsNumberString()
  _id: number;

  @IsString()
  text: string;

  @IsString()
  from: string;

  @IsString()
  to: string;

  @IsDate()
  date: Date;
}
