import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { RecadosService } from './recados.service';
import { UserMessageDto } from './menssage entity/create-message.dto';
import { UserM } from './menssage entity/menssage.entity';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  @Get()
  findAll() {
    return this.recadosService.findAll();
  }

  @Post()
  createMessage(@Body() dto: UserMessageDto): Promise<UserM> {
    return this.recadosService.create(dto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<string> {
    const delsuccess = await this.recadosService.remove(id);
    return delsuccess ? 'Deletado' : 'Mensagem não existe';
  }
}
