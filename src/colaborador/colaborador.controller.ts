import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ColaboradorService } from "./colaborador.service";
import { CriaColaboradorDTO } from "./dto/CriaColaborador.dto";
import { AtualizaColaboradorDTO } from "./dto/AtualizaColaborador.dto";

@Controller('colaboradores')
export class ColaboradorController {
    constructor(private colaboradorService: ColaboradorService) {}

    @Post()
    async cria(@Body() dados: CriaColaboradorDTO) {
        const colaboradorCriado = await this.colaboradorService.criaColaborador(dados);

        return {
            colaborador: colaboradorCriado.id,
            message: 'Colaborador criado com sucesso!'
        };
    }

    @Get()
    async listar() {
        const colaboradores = await this.colaboradorService.listaColaboradores();
        return colaboradores;
    }

    @Put('/:id')
    async atualiza(@Param('id') id: string, @Body() novosDados: AtualizaColaboradorDTO) {
        const colaboradorAtualizado = await this.colaboradorService.atualizaColaborador(id, novosDados);

        return {
            colaborador: colaboradorAtualizado,
            message: 'Colaborador atualizado com sucesso!'
        };
    }

    @Delete('/:id')
    async remove(@Param('id') id: string) {
        await this.colaboradorService.deletaColaborador(id);

        return {
            message: 'Colaborador removido com sucesso!'
        };
    }
}
