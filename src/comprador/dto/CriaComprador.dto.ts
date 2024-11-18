import { IsNotEmpty, IsString, IsOptional, IsEmail, Length } from "class-validator";

export class CriaCompradorDTO {
    @IsNotEmpty()
    @IsString()
    razaoSocial: string;

    @IsNotEmpty()
    @IsString()
    @Length(14, 18)
    cnpj: string;

    @IsNotEmpty()
    @IsString()
    inscricaoMunicipal: string;

    @IsOptional()
    @IsString()
    inscricaoEstadual?: string;

    @IsNotEmpty()
    @IsString()
    endereco: string;

    @IsNotEmpty()
    @IsString()
    cep: string;

    @IsNotEmpty()
    @IsString()
    municipio: string;

    @IsNotEmpty()
    @IsString()
    uf: string;

    @IsOptional()
    @IsString()
    telefone?: string;

    @IsNotEmpty()
    @IsString()
    celular: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}
