import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ColaboradorEntity } from "./colaborador.entity";
import { CriaColaboradorDTO } from "./dto/CriaColaborador.dto";
import { AtualizaColaboradorDTO } from "./dto/AtualizaColaborador.dto";

@Injectable()
export class ColaboradorService {
    constructor(
        @InjectRepository(ColaboradorEntity)
        private readonly colaboradorRepository: Repository<ColaboradorEntity>
    ) {}

    async criaColaborador(dadosColaborador: CriaColaboradorDTO) {
        const colaboradorEntity = this.colaboradorRepository.create(dadosColaborador);
        return this.colaboradorRepository.save(colaboradorEntity);
    }

    async listaColaboradores() {
        return this.colaboradorRepository.find();
    }

    async atualizaColaborador(id: string, novosDados: AtualizaColaboradorDTO) {
        const colaboradorExistente = await this.colaboradorRepository.findOne({ where: { id } });
        if (!colaboradorExistente) {
            throw new NotFoundException(`Colaborador com ID ${id} não encontrado.`);
        }
        await this.colaboradorRepository.update(id, novosDados);
        return this.colaboradorRepository.findOne({ where: { id } });
    }

    async deletaColaborador(id: string) {
        const colaboradorExistente = await this.colaboradorRepository.findOne({ where: { id } });
        if (!colaboradorExistente) {
            throw new NotFoundException(`Colaborador com ID ${id} não encontrado.`);
        }
        return this.colaboradorRepository.delete(id);
    }
}
