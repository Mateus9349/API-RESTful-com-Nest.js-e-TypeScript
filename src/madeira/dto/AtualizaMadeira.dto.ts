import { IsOptional, IsString, IsNumber, IsBoolean } from "class-validator";

export class AtualizaMadeiraDTO {

    @IsOptional()
    @IsString()
    data?: string;

    @IsOptional()
    @IsString()
    placa?: string;

    @IsOptional()
    @IsString()
    processada?: string;

    @IsOptional()
    @IsString()
    nomePopular?: string;

    @IsOptional()
    @IsString()
    nomeCientifico?: string;

    @IsOptional()
    @IsString()
    tora?: string;

    @IsOptional()
    @IsString()
    produto?: string;

    @IsOptional()
    @IsNumber()
    expessura?: number;

    @IsOptional()
    @IsNumber()
    largura?: number;

    @IsOptional()
    @IsNumber()
    comprimento?: number;

    @IsOptional()
    @IsNumber()
    quantidade?: number;

    @IsOptional()
    @IsNumber()
    metroCubico?: number;

    @IsOptional()
    @IsNumber()
    COD?: number;

    @IsOptional()
    @IsString()
    NF?: string;

    @IsOptional()
    @IsString()
    DOF?: string;

    @IsOptional()
    @IsString()
    observacao?: string;

    @IsOptional()
    @IsNumber()
    valor?: number;

    @IsOptional()
    @IsBoolean()
    ativo?: boolean;
}
