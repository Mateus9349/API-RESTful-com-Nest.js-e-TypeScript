import { IsNotEmpty, IsNumber, IsString, IsDateString, IsInt } from "class-validator";

export class CriaMaquinaDTO {
    
    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsString()
    tipoProcesso: string;

    @IsNotEmpty()
    @IsString()
    fonteEnergia: string;

    @IsNotEmpty()
    @IsNumber()
    valor: number;

    @IsNotEmpty()
    @IsDateString()
    dataAquisicao: string;

    @IsNotEmpty()
    @IsNumber()
    vidaUtil: number;

    @IsNotEmpty()
    @IsNumber()
    depreciacaoAnual: number;

    @IsNotEmpty()
    @IsNumber()
    depreciacaoDia: number;

    @IsNotEmpty()
    @IsInt()
    diasUtilizados: number;

    @IsNotEmpty()
    @IsNumber()
    horasTrabalhadas: number;

    @IsNotEmpty()
    @IsNumber()
    potencia: number;
}
