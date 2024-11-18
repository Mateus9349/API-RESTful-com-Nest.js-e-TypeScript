import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { MadeiraService } from "./madeira.service";
import { CriaMadeiraDTO } from "./dto/CriaMadeira.dto";
import { AtualizaMadeiraDTO } from "./dto/AtualizaMadeira.dto";

@Controller('madeiras')
export class MadeiraController {
    constructor ( private madeiraService: MadeiraService ) {}

    @Post()
    async cria(@Body() dados: CriaMadeiraDTO) {
        const madeiraCriada = await this.madeiraService.criaMadeira(dados);

        return{
            madeira: madeiraCriada.id,
            messagem: 'madeira cadastrada com sucesso'
        };
    }

    @Get()
    async listar() {
        const madeirasSalvas = await this.madeiraService.listaMadeiras();

        return madeirasSalvas;
    }

    @Get('/:id')
    async pegaUmaMadeira(@Param('id') id: string) {
        const madeira = await this.madeiraService.pegaUmaMadeira(id);
        return madeira;
    }

    @Put('/:id')
    async atualizaMadeira(
        @Param('id') id: string,
        @Body() novosDados: AtualizaMadeiraDTO, 
    ) {
        const madeiraAtualizada = await this.madeiraService.atualizaMadeira(id, novosDados);

        return {
            medeira: madeiraAtualizada,
            messagem: 'madeira atualizada com sucesso'
        }        
    }

    @Delete('/:id')
    async remove(@Param('id') id: string) {
        const madeiraRemovida = await this.madeiraService.deletaMadeira(id);

        return {
            madeira: madeiraRemovida,
            messagem: 'madeira removida com sucesso'
        }
    }
}