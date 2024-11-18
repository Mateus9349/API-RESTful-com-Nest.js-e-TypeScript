import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProcessoService } from "./processo.service";
import { CriaProcessoDTO } from "./dto/CriaProcesso.dto";
import { AtualizaProcessoDTO } from "./dto/AtualizaProcesso.dto";

@Controller('processos')
export class ProcessoController {
    constructor ( private processoService:  ProcessoService ) {}

    @Post()
    async cria(@Body() dados: CriaProcessoDTO) {
        const processoCriado = await this.processoService.criaProcesso(dados);

        return{
            processo: processoCriado.id,
            message: 'processo criado com sucesso!'
        };
    }

    @Get()
    async listar() {
        const processosSalvos = await this.processoService.listaProcessos();

        return processosSalvos;
    }

    @Put('/:id')
    async atualiza(@Param('id') id: string, @Body() novosDados: AtualizaProcessoDTO) {
        const processoAtualizado = await this.processoService.atualizaProcesso(id, novosDados);

        return {
            processo: processoAtualizado,
            message: 'processo atualizado com sucesso!'
        };
    }

    @Delete('/:id')
    async remove(@Param('id') id: string) {
        const processoRemovido = await this.processoService.deletaProcesso(id);

        return {
            processo: processoRemovido,
            message: 'processo removido com sucesso!'
        }
    }
}