import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';

import { ProdutoModule } from './produto/produto.module';
import { UsuarioModule } from './usuario/usuario.module';
import { MadeiraModule } from './madeira/madeira.module';
import { MaquinaModule } from './maquina/maquina.module';
import { ProcessoModule } from './processo/processo.module';
import { ColaboradorModule } from './colaborador/colaborador.module';
import { CompradorModule } from './comprador/comprador.module';
import { PedidoModule } from './pedido/pedido.module';
import { ItemPedidoModule } from './itemPedido/itemPedido.module';

@Module({
  imports: [
    UsuarioModule,
    ProdutoModule,
    MadeiraModule,
    MaquinaModule,
    ProcessoModule,
    ColaboradorModule,
    CompradorModule,
    PedidoModule,
    ItemPedidoModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
  ],
})
export class AppModule {}
