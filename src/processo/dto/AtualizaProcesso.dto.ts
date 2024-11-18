import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString } from "class-validator";

export class AtualizaProcessoDTO {
    @IsOptional()
    @IsString()
    madeiraId: string;

    @IsOptional()
    @IsNumber()
    quantidadeDeEntrada: number;
    
    @IsOptional()
    @IsString()
    tipoProcesso: string;

    @IsOptional()
    @IsString()
    produto: string;

    @IsOptional()
    @IsDateString()
    inicio: string;

    @IsOptional()
    @IsDateString()
    fim: string;

    @IsOptional()
    @IsNumber()
    despesaEnergia: number;

    @IsOptional()
    @IsNumber()
    despesaColaborador: number;

    @IsOptional()
    @IsNumber()
    despesaMaquina: number;

    @IsOptional()
    @IsNumber()
    despesaInsumos: number;

    @IsOptional()
    @IsNumber()
    despesaMadeira: number;

    @IsOptional()
    @IsBoolean()
    finalizado: boolean;
}