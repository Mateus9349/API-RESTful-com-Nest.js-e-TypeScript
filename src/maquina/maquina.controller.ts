import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { MaquinaService } from "./maquina.service";
import { CriaMaquinaDTO } from "./dto/CriaMaquina.dto";
import { AtualizaMaquinaDTO } from "./dto/AtualizaMaquina.dto";

@Controller('maquinas')
export class MaquinaController {
    constructor ( private maquinaService: MaquinaService ) {}

    @Post()
    async cria(@Body() dados: CriaMaquinaDTO) {
        const maquinaCriada = await this.maquinaService.criaMaquina(dados);

        return{
            maquina: maquinaCriada.id,
            messagem: 'maquina criada com sucesso!'
        };
    }

    @Get()
    async listar() {
        const maquinasSalvas = await this.maquinaService.listaMaquinas();

        return maquinasSalvas;
    }

    @Put('/:id')
    async atualiza(@Param('id') id: string, @Body() novosDados: AtualizaMaquinaDTO) {
        const maquinaAtualizada = await this.maquinaService.atualizaMaquina(id, novosDados);

        return {
            maquina: maquinaAtualizada,
            message: 'maquina atualizada com sucesso!'
        };
    }

    @Delete('/:id')
    async remove(@Param('id') id: string) {
        const maquinaRemovida = await this.maquinaService.deletaMaquina(id);

        return {
            maquina: maquinaRemovida,
            message: 'maquina removida com sucesso!' 
        }
    }
}