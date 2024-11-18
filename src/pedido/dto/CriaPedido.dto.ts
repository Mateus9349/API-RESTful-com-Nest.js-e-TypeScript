import { IsNotEmpty, IsNumber, IsString, IsOptional } from "class-validator";

export class CriaPedidoDTO {
    @IsNotEmpty()
    @IsString()
    compradorId: string;

    @IsNotEmpty()
    @IsNumber()
    numeroPedido: number;

    @IsNotEmpty()
    dataPedido: Date;

    @IsNotEmpty()
    @IsNumber()
    subtotal: number;

    @IsNotEmpty()
    @IsString()
    formaPagamento: string;

    @IsOptional()
    @IsString()
    observacoes?: string;

    @IsNotEmpty()
    @IsNumber()
    totalVolume: number;

    @IsOptional()
    datasPagamento?: Date[];

    @IsNotEmpty()
    @IsString()
    tipoNota: string;

    @IsNotEmpty()
    dataEntrega: Date;

    @IsOptional()
    fretePagoPor?: 'Contratante' | 'Fornecedor';

    @IsOptional()
    @IsNumber()
    valorFrete: number;

    @IsOptional()
    @IsNumber()
    descontos?: number;

    @IsOptional()
    @IsNumber()
    total?: number;

    @IsNotEmpty()
    @IsNumber()
    NF: number;
}
