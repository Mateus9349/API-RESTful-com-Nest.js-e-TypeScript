import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProcessoEntity } from "./processo.entity";
import { ProcessoController } from "./processo.controller";
import { ProcessoService } from "./processo.service";

@Module({
    imports: [TypeOrmModule.forFeature([ProcessoEntity])],
    controllers: [ProcessoController],
    providers: [ProcessoService],
})
export class ProcessoModule {}