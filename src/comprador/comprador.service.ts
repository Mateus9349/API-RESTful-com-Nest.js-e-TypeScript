import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CompradorEntity } from "./comprador.entity";
import { CriaCompradorDTO } from "./dto/CriaComprador.dto";
import { AtualizaCompradorDTO } from "./dto/AtualizaComprador.dto";

@Injectable()
export class CompradorService {
    constructor(
        @InjectRepository(CompradorEntity)
        private readonly compradorRepository: Repository<CompradorEntity>
    ) {}

    async criaComprador(dadosComprador: CriaCompradorDTO) {
        const compradorEntity = this.compradorRepository.create(dadosComprador);
        return this.compradorRepository.save(compradorEntity);
    }

    async listaCompradores() {
        return this.compradorRepository.find({ where: { deletedAt: null } });
    }

    async atualizaComprador(id: string, novosDados: AtualizaCompradorDTO) {
        const compradorExistente = await this.compradorRepository.findOne({ where: { id } });
        if (!compradorExistente) {
            throw new NotFoundException(`Comprador com ID ${id} não encontrado.`);
        }
        await this.compradorRepository.update(id, novosDados);
        return this.compradorRepository.findOne({ where: { id } });
    }

    async deletaComprador(id: string) {
        const compradorExistente = await this.compradorRepository.findOne({ where: { id } });
        if (!compradorExistente) {
            throw new NotFoundException(`Comprador com ID ${id} não encontrado.`);
        }
        compradorExistente.deletedAt = new Date();
        return this.compradorRepository.save(compradorExistente);
    }
}
