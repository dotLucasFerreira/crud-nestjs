import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
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

  @Get(':id')
  findOne(@Param('id') id: string ) {
    return this.recadosService.findOne(id);
  }

  @Post()
  createMessage(@Body() dto: UserMessageDto): Promise<UserM> {
    return this.recadosService.create(dto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateData: Partial<UserMessageDto>,
  ): Promise<UserM | string> {
    const updated = await this.recadosService.update(id, updateData);
    return updated ? updated : 'Mensagem não existe';
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    const deleteResult = await this.recadosService.remove(id);
    return deleteResult ? 'Deletado' : 'Mensagem não existe';
  }
}
