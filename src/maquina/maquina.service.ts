import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MaquinaEntity } from "./maquina.entity";
import { Repository } from "typeorm";
import { CriaMaquinaDTO } from "./dto/CriaMaquina.dto";
import { AtualizaMaquinaDTO } from "./dto/AtualizaMaquina.dto";


@Injectable()
export class MaquinaService {
    constructor (
        @InjectRepository(MaquinaEntity)
        private readonly maquinaRepository: Repository<MaquinaEntity>
    ) { }

    async criaMaquina(dadosMaquina: CriaMaquinaDTO) {
        const maquinaEntity = new MaquinaEntity();

        maquinaEntity.nome = dadosMaquina.nome;
        maquinaEntity.tipoProcesso = dadosMaquina.tipoProcesso;
        maquinaEntity.fonteEnergia = dadosMaquina.fonteEnergia;
        maquinaEntity.valor = dadosMaquina.valor;
        maquinaEntity.dataAquisicao = dadosMaquina.dataAquisicao;
        maquinaEntity.vidaUtil = dadosMaquina.vidaUtil;
        maquinaEntity.depreciacaoAnual = dadosMaquina.depreciacaoAnual;
        maquinaEntity.depreciacaoDia = dadosMaquina.depreciacaoDia;
        maquinaEntity.diasUtilizados = dadosMaquina.diasUtilizados;
        maquinaEntity.horasTrabalhadas = dadosMaquina.horasTrabalhadas;
        maquinaEntity.potencia = dadosMaquina.potencia;

        return this.maquinaRepository.save(maquinaEntity);
    }

    async listaMaquinas() {
        const maquinasSalvas = await this.maquinaRepository.find();
        return maquinasSalvas;
    }

    async atualizaMaquina(id: string, novosDados: AtualizaMaquinaDTO) {
        await this.maquinaRepository.update(id, novosDados);
        const maquinaAtualizada = await this.maquinaRepository.findOne({ where: { id } });
        return maquinaAtualizada;
    }

    async deletaMaquina(id: string) {
        return this.maquinaRepository.delete(id);
    }
}