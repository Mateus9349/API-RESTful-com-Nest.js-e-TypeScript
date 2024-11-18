import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProcessoEntity } from "./processo.entity";
import { Repository } from "typeorm";
import { CriaProcessoDTO } from "./dto/CriaProcesso.dto";
import { AtualizaProcessoDTO } from "./dto/AtualizaProcesso.dto";

@Injectable()
export class ProcessoService {
    constructor (
        @InjectRepository(ProcessoEntity)
        private readonly processoRepository: Repository<ProcessoEntity>
    ) { }

    async criaProcesso(dadosProcesso: CriaProcessoDTO) {
        const processoEntity = new ProcessoEntity();

        processoEntity.madeiraId = dadosProcesso.madeiraId;
        processoEntity.quantidadeDeEntrada = dadosProcesso.quantidadeDeEntrada;
        processoEntity.tipoProcesso = dadosProcesso.tipoProcesso;
        processoEntity.produto = dadosProcesso.produto;
        processoEntity.inicio = dadosProcesso.inicio;
        processoEntity.fim = dadosProcesso.fim;
        processoEntity.despesaEnergia = dadosProcesso.despesaEnergia;
        processoEntity.despesaColaborador = dadosProcesso.despesaColaborador;
        processoEntity.despesaMaquina = dadosProcesso.despesaMaquina;
        processoEntity.despesaInsumos = dadosProcesso.despesaInsumos;
        processoEntity.despesaMadeira = dadosProcesso.despesaMadeira;
        processoEntity.finalizado = dadosProcesso.finalizado;

        return this.processoRepository.save(processoEntity);
    }

    async listaProcessos() {
        const processosSalvos = await this.processoRepository.find();
        return processosSalvos;
    }

    async atualizaProcesso(id: string, novosDados: AtualizaProcessoDTO) {
        await this.processoRepository.update(id, novosDados);
        const processoAtualizado = await this.processoRepository.findOne({ where: { id } });
        return processoAtualizado;
    }

    async deletaProcesso(id: string) {
        return this.processoRepository.delete(id);
    }
}