import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ItemPedidoEntity } from "./itemPedido.entity";
import { CriaItemPedidoDTO } from "./dto/CriaItemPedido.dto";
import { AtualizaItemPedidoDTO } from "./dto/AtualizaItemPedido.dto";

@Injectable()
export class ItemPedidoService {
    constructor(
        @InjectRepository(ItemPedidoEntity)
        private readonly itemPedidoRepository: Repository<ItemPedidoEntity>
    ) {}

    async criaItemPedido(dadosItemPedido: CriaItemPedidoDTO) {
        const itemPedidoEntity = this.itemPedidoRepository.create(dadosItemPedido);
        return this.itemPedidoRepository.save(itemPedidoEntity);
    }

    async listaItensPedido() {
        return this.itemPedidoRepository.find();
    }

    async atualizaItemPedido(id: string, novosDados: AtualizaItemPedidoDTO) {
        const itemPedidoExistente = await this.itemPedidoRepository.findOne({ where: { id } });
        if (!itemPedidoExistente) {
            throw new NotFoundException(`Item do pedido com ID ${id} não encontrado.`);
        }
        await this.itemPedidoRepository.update(id, novosDados);
        return this.itemPedidoRepository.findOne({ where: { id } });
    }

    async deletaItemPedido(id: string) {
        const itemPedidoExistente = await this.itemPedidoRepository.findOne({ where: { id } });
        if (!itemPedidoExistente) {
            throw new NotFoundException(`Item do pedido com ID ${id} não encontrado.`);
        }
        return this.itemPedidoRepository.delete(id);
    }
}
