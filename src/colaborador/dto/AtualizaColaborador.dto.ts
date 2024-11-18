import { IsOptional, IsString, IsNumber } from "class-validator";

export class AtualizaColaboradorDTO {
    @IsOptional()
    @IsString()
    nome: string;

    @IsOptional()
    @IsNumber()
    idade: number;

    @IsOptional()
    @IsString()
    sexo: string;

    @IsOptional()
    @IsString()
    comunidade: string;

    @IsOptional()
    @IsString()
    funcao: string;

    @IsOptional()
    @IsNumber()
    valorHora: number;

    @IsOptional()
    @IsNumber()
    valorDiaria: number;
}
