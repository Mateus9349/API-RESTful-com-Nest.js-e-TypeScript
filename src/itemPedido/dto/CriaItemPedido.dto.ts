import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CriaItemPedidoDTO {
    @IsNotEmpty()
    @IsString()
    pedidoId: string;

    @IsNotEmpty()
    @IsString()
    descricao: string;

    @IsNotEmpty()
    @IsString()
    unidade: string;

    @IsNotEmpty()
    @IsNumber()
    quantidade: number;

    @IsNotEmpty()
    @IsNumber()
    valorUnidade: number;

    @IsNotEmpty()
    @IsNumber()
    valorTotal: number;
}
