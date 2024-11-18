import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PedidoEntity } from "./pedido.entity";
import { CriaPedidoDTO } from "./dto/CriaPedido.dto";
import { AtualizaPedidoDTO } from "./dto/AtualizaPedido.dto";

@Injectable()
export class PedidoService {
    constructor(
        @InjectRepository(PedidoEntity)
        private readonly pedidoRepository: Repository<PedidoEntity>
    ) {}

    async criaPedido(dadosPedido: CriaPedidoDTO) {
        const pedidoEntity = this.pedidoRepository.create(dadosPedido);
        return this.pedidoRepository.save(pedidoEntity);
    }

    async listaPedidos() {
        return this.pedidoRepository.find();
    }

    async atualizaPedido(id: string, novosDados: AtualizaPedidoDTO) {
        const pedidoExistente = await this.pedidoRepository.findOne({ where: { id } });
        if (!pedidoExistente) {
            throw new NotFoundException(`Pedido com ID ${id} não encontrado.`);
        }
        await this.pedidoRepository.update(id, novosDados);
        return this.pedidoRepository.findOne({ where: { id } });
    }

    async deletaPedido(id: string) {
        const pedidoExistente = await this.pedidoRepository.findOne({ where: { id } });
        if (!pedidoExistente) {
            throw new NotFoundException(`Pedido com ID ${id} não encontrado.`);
        }
        return this.pedidoRepository.delete(id);
    }
}
