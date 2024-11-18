import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CriaColaboradorDTO {
    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsNumber()
    idade: number;

    @IsNotEmpty()
    @IsString()
    sexo: string;

    @IsNotEmpty()
    @IsString()
    comunidade: string;

    @IsNotEmpty()
    @IsString()
    funcao: string;

    @IsNotEmpty()
    @IsNumber()
    valorHora: number;

    @IsNotEmpty()
    @IsNumber()
    valorDiaria: number;
}
