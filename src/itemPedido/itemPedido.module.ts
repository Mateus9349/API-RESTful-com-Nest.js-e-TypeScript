import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemPedidoEntity } from "./itemPedido.entity";
import { ItemPedidoController } from "./itemPedido.controller";
import { ItemPedidoService } from "./itemPedido.service";

@Module({
    imports: [TypeOrmModule.forFeature([ItemPedidoEntity])],
    controllers: [ItemPedidoController],
    providers: [ItemPedidoService],
})
export class ItemPedidoModule {}
