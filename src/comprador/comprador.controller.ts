import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CompradorService } from "./comprador.service";
import { CriaCompradorDTO } from "./dto/CriaComprador.dto";
import { AtualizaCompradorDTO } from "./dto/AtualizaComprador.dto";

@Controller('compradores')
export class CompradorController {
    constructor(private compradorService: CompradorService) {}

    @Post()
    async cria(@Body() dados: CriaCompradorDTO) {
        const compradorCriado = await this.compradorService.criaComprador(dados);
        return {
            comprador: compradorCriado.id,
            message: 'Comprador criado com sucesso!'
        };
    }

    @Get()
    async listar() {
        const compradores = await this.compradorService.listaCompradores();
        return compradores;
    }

    @Put('/:id')
    async atualiza(@Param('id') id: string, @Body() novosDados: AtualizaCompradorDTO) {
        const compradorAtualizado = await this.compradorService.atualizaComprador(id, novosDados);
        return {
            comprador: compradorAtualizado,
            message: 'Comprador atualizado com sucesso!'
        };
    }

    @Delete('/:id')
    async remove(@Param('id') id: string) {
        await this.compradorService.deletaComprador(id);
        return {
            message: 'Comprador removido com sucesso!'
        };
    }
}
