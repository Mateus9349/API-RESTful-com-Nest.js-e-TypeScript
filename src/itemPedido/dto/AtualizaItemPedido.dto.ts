import { IsOptional, IsString, IsNumber } from "class-validator";

export class AtualizaItemPedidoDTO {
    @IsOptional()
    @IsString()
    pedidoId?: string;

    @IsOptional()
    @IsString()
    descricao?: string;

    @IsOptional()
    @IsString()
    unidade?: string;

    @IsOptional()
    @IsNumber()
    quantidade?: number;

    @IsOptional()
    @IsNumber()
    valorUnidade?: number;

    @IsOptional()
    @IsNumber()
    valorTotal?: number;
}
