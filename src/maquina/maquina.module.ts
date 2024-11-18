import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MaquinaEntity } from "./maquina.entity";
import { MaquinaController } from "./maquina.controller";
import { MaquinaService } from "./maquina.service";

@Module({
    imports: [TypeOrmModule.forFeature([MaquinaEntity])],
    controllers: [MaquinaController],
    providers: [MaquinaService],
})
export class MaquinaModule {}