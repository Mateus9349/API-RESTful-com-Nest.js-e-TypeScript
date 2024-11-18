import { IsNotEmpty } from "class-validator";

export class CriaProcessoDTO {
    @IsNotEmpty()
    madeiraId: string;

    @IsNotEmpty()
    quantidadeDeEntrada: number;

    @IsNotEmpty()
    tipoProcesso: string;

    @IsNotEmpty()
    produto: string;

    @IsNotEmpty()
    inicio: string;

    @IsNotEmpty()
    fim: string;

    @IsNotEmpty()
    despesaEnergia: number;

    @IsNotEmpty()
    despesaColaborador: number;

    @IsNotEmpty()
    despesaMaquina: number;

    @IsNotEmpty()
    despesaInsumos: number;

    @IsNotEmpty()
    despesaMadeira: number;

    @IsNotEmpty()
    finalizado: boolean;
}