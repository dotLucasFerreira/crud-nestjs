import { Module } from '@nestjs/common';
import { RecadosModule } from '../recados/recados.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    RecadosModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nestdb'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
