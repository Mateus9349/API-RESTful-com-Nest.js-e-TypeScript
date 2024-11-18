import { IsOptional, IsString, IsNumber, IsDateString, IsInt } from "class-validator";

export class AtualizaMaquinaDTO {

    @IsOptional()
    @IsString()
    nome: string;

    @IsOptional()
    @IsString()
    tipoProcesso: string;

    @IsOptional()
    @IsString()
    fonteEnergia: string;

    @IsOptional()
    @IsNumber()
    valor: number;

    @IsOptional()
    @IsDateString()
    dataAquisicao: string;

    @IsOptional()
    @IsNumber()
    vidaUtil: number;

    @IsOptional()
    @IsNumber()
    depreciacaoAnual: number;

    @IsOptional()
    @IsNumber()
    depreciacaoDia: number;

    @IsOptional()
    @IsInt()
    diasUtilizados: number;

    @IsOptional()
    @IsNumber()
    horasTrabalhadas: number;

    @IsOptional()
    @IsNumber()
    potencia: number;
}
