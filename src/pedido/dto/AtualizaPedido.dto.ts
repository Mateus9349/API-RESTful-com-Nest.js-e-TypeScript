import { IsOptional, IsString, IsNumber } from "class-validator";

export class AtualizaPedidoDTO {
    @IsOptional()
    @IsString()
    compradorId?: string;

    @IsOptional()
    @IsNumber()
    numeroPedido?: number;

    @IsOptional()
    dataPedido?: Date;

    @IsOptional()
    @IsNumber()
    subtotal?: number;

    @IsOptional()
    @IsString()
    formaPagamento?: string;

    @IsOptional()
    @IsString()
    observacoes?: string;

    @IsOptional()
    @IsNumber()
    totalVolume?: number;

    @IsOptional()
    datasPagamento?: Date[];

    @IsOptional()
    @IsString()
    tipoNota?: string;

    @IsOptional()
    dataEntrega?: Date;

    @IsOptional()
    fretePagoPor?: 'Contratante' | 'Fornecedor';

    @IsOptional()
    @IsNumber()
    valorFrete?: number;

    @IsOptional()
    @IsNumber()
    descontos?: number;

    @IsOptional()
    @IsNumber()
    total?: number;

    @IsOptional()
    @IsNumber()
    NF?: number;
}
