import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength, Min, ValidateNested, ArrayMinSize, IsUrl, Matches } from "class-validator";

export class CriaProdutoDTO {
    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsNumber({ maxDecimalPlaces: 2 })
    @IsPositive()
    valor: number;

    @IsNumber()
    @Min(0)
    quantidade: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(1000)
    descricao: string;

    @ValidateNested({ each: true })
    @IsArray()
    @ArrayMinSize(2)
    @Type(() => CaracteristicaProdutoDTO)
    caracteristicas: CaracteristicaProdutoDTO[];

    @ValidateNested({ each: true })
    @IsArray()
    @ArrayMinSize(1)
    @Type(() => ImagemProdutoDTO)
    imagens: ImagemProdutoDTO[];

    @IsString()
    @IsNotEmpty()
    categoria: string;
}

export class CaracteristicaProdutoDTO {
    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsString()
    @IsNotEmpty()
    descricao: string;
}

export class ImagemProdutoDTO {
    @IsUrl()
    url: string;

    @IsString()
    @IsNotEmpty()
    descricao: string;
}
