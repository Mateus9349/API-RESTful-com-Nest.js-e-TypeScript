import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ItemPedidoService } from "./itemPedido.service";
import { CriaItemPedidoDTO } from "./dto/CriaItemPedido.dto";
import { AtualizaItemPedidoDTO } from "./dto/AtualizaItemPedido.dto";

@Controller('itens-pedido')
export class ItemPedidoController {
    constructor(private itemPedidoService: ItemPedidoService) {}

    @Post()
    async cria(@Body() dados: CriaItemPedidoDTO) {
        const itemPedidoCriado = await this.itemPedidoService.criaItemPedido(dados);

        return {
            itemPedido: itemPedidoCriado.id,
            message: 'Item do pedido criado com sucesso!'
        };
    }

    @Get()
    async listar() {
        const itensPedido = await this.itemPedidoService.listaItensPedido();
        return itensPedido;
    }

    @Put('/:id')
    async atualiza(@Param('id') id: string, @Body() novosDados: AtualizaItemPedidoDTO) {
        const itemPedidoAtualizado = await this.itemPedidoService.atualizaItemPedido(id, novosDados);

        return {
            itemPedido: itemPedidoAtualizado,
            message: 'Item do pedido atualizado com sucesso!'
        };
    }

    @Delete('/:id')
    async remove(@Param('id') id: string) {
        await this.itemPedidoService.deletaItemPedido(id);

        return {
            message: 'Item do pedido removido com sucesso!'
        };
    }
}
