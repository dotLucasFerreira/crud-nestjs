import { Module } from '@nestjs/common';
import { RecadosController } from './recados.controller';
import { RecadosService } from './recados.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageSchema, UserM } from './menssage entity/menssage.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserM.name, schema: MessageSchema }]),
  ],
  controllers: [RecadosController],
  providers: [RecadosService],
})
export class RecadosModule {}
