import { Module } from "@nestjs/common";
import { usuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";
import { EmailEhUnicoValidator } from "./validacao/email-eh-unico.validator";


@Module({
    controllers: [usuarioController],
    providers: [UsuarioRepository, EmailEhUnicoValidator]
})
export class UsuarioModule {}