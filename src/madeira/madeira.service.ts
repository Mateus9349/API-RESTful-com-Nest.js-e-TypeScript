import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MadeiraEntity } from "./madeira.entity";
import { Repository } from "typeorm";
import { CriaMadeiraDTO } from "./dto/CriaMadeira.dto";
import { AtualizaMadeiraDTO } from "./dto/AtualizaMadeira.dto";

@Injectable()
export class MadeiraService {
    constructor(
        @InjectRepository(MadeiraEntity)
        private readonly madeiraRepository: Repository<MadeiraEntity>
    ) { }

    async criaMadeira(dadosMadeira: CriaMadeiraDTO) {
        const madeiraEntity = new MadeiraEntity();

        madeiraEntity.data = dadosMadeira.data; // Ajustado para refletir o campo 'data' da interface
        madeiraEntity.placa = dadosMadeira.placa;
        madeiraEntity.processada = dadosMadeira.processada;
        madeiraEntity.nomePopular = dadosMadeira.nomePopular;
        madeiraEntity.nomeCientifico = dadosMadeira.nomeCientifico;
        madeiraEntity.tora = dadosMadeira.tora;
        madeiraEntity.produto = dadosMadeira.produto;
        madeiraEntity.expessura = dadosMadeira.expessura; // Corrigido conforme interface 'expessura'
        madeiraEntity.largura = dadosMadeira.largura;
        madeiraEntity.comprimento = dadosMadeira.comprimento;
        madeiraEntity.quantidade = dadosMadeira.quantidade;
        madeiraEntity.metroCubico = dadosMadeira.metroCubico;
        madeiraEntity.COD = dadosMadeira.COD; // Mantido como 'COD' conforme interface
        madeiraEntity.NF = dadosMadeira.NF;
        madeiraEntity.DOF = dadosMadeira.DOF;
        madeiraEntity.observacao = dadosMadeira.observacao;
        madeiraEntity.valor = dadosMadeira.valor;
        madeiraEntity.ativo = dadosMadeira.ativo;

        return this.madeiraRepository.save(madeiraEntity);
    }


    async listaMadeiras() {
        const madeirasSalvas = await this.madeiraRepository.find();
        return madeirasSalvas;
    }

    async pegaUmaMadeira(id: string) {
        const madeira = await this.madeiraRepository.findOne({ where: { id } });
        return madeira;
    }

    async atualizaMadeira(id: string, novosDados: AtualizaMadeiraDTO) {
        await this.madeiraRepository.update(id, novosDados);
        const madeiraAtualizada = await this.madeiraRepository.findOne({ where: { id } });
        return madeiraAtualizada;
    }

    async deletaMadeira(id: string) {
        await this.madeiraRepository.delete(id);
    }

}