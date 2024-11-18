import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ColaboradorEntity } from "./colaborador.entity";
import { ColaboradorController } from "./colaborador.controller";
import { ColaboradorService } from "./colaborador.service";

@Module({
    imports: [TypeOrmModule.forFeature([ColaboradorEntity])],
    controllers: [ColaboradorController],
    providers: [ColaboradorService],
})
export class ColaboradorModule {}