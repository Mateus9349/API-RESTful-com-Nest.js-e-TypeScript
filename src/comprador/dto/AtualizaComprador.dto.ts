import { IsOptional, IsString, IsEmail, Length } from "class-validator";

export class AtualizaCompradorDTO {
    @IsOptional()
    @IsString()
    razaoSocial: string;

    @IsOptional()
    @IsString()
    @Length(14, 18)
    cnpj: string;

    @IsOptional()
    @IsString()
    inscricaoMunicipal: string;

    @IsOptional()
    @IsString()
    inscricaoEstadual?: string;

    @IsOptional()
    @IsString()
    endereco: string;

    @IsOptional()
    @IsString()
    cep: string;

    @IsOptional()
    @IsString()
    municipio: string;

    @IsOptional()
    @IsString()
    uf: string;

    @IsOptional()
    @IsString()
    telefone?: string;

    @IsOptional()
    @IsString()
    celular: string;

    @IsOptional()
    @IsEmail()
    email: string;
}
