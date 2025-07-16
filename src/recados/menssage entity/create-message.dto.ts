import { IsDate, IsString } from '@nestjs/class-validator';

export class UserMessageDto {
  @IsString()
  text: string;

  @IsString()
  from: string;

  @IsString()
  to: string;

  @IsDate()
  date: Date;
}
