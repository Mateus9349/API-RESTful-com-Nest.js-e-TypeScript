import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PedidoService } from "./pedido.service";
import { CriaPedidoDTO } from "./dto/CriaPedido.dto";
import { AtualizaPedidoDTO } from "./dto/AtualizaPedido.dto";

@Controller('pedidos')
export class PedidoController {
    constructor(private pedidoService: PedidoService) {}

    @Post()
    async cria(@Body() dados: CriaPedidoDTO) {
        const pedidoCriado = await this.pedidoService.criaPedido(dados);

        return {
            pedido: pedidoCriado.id,
            message: 'Pedido criado com sucesso!'
        };
    }

    @Get()
    async listar() {
        const pedidos = await this.pedidoService.listaPedidos();
        return pedidos;
    }

    @Put('/:id')
    async atualiza(@Param('id') id: string, @Body() novosDados: AtualizaPedidoDTO) {
        const pedidoAtualizado = await this.pedidoService.atualizaPedido(id, novosDados);

        return {
            pedido: pedidoAtualizado,
            message: 'Pedido atualizado com sucesso!'
        };
    }

    @Delete('/:id')
    async remove(@Param('id') id: string) {
        await this.pedidoService.deletaPedido(id);

        return {
            message: 'Pedido removido com sucesso!'
        };
    }
}
