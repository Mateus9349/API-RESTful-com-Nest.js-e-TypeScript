import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { UsuarioService } from './usuario.service';
import { LoginUsuarioDTO } from './dto/LoginUsuario.dto';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post()
  async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
    const usuarioCriado = await this.usuarioService.criaUsuario(dadosDoUsuario);

    return {
      usuario: new ListaUsuarioDTO(usuarioCriado.id, usuarioCriado.nome),
      mensagem: 'Usuário criado com sucesso',
    };
  }

  @Get()
  async listaUsuarios() {
    const usuariosSalvos = await this.usuarioService.listaUsuarios();
    return usuariosSalvos;
  }

  @Put('/:id')
  async atualizaUsuario(
    @Param('id') id: string,
    @Body() novosDados: AtualizaUsuarioDTO,
  ) {
    await this.usuarioService.atualizaUsuario(id, novosDados);
    return { mensagem: 'Usuário atualizado com sucesso' };
  }

  @Delete('/:id')
  async removeUsuario(@Param('id') id: string) {
    await this.usuarioService.deletaUsuario(id);
    return { mensagem: 'Usuário removido com sucesso' };
  }

  @Post('/login')
  async login(@Body() dadosLogin: LoginUsuarioDTO) {
    const usuario = await this.usuarioService.validaLogin(dadosLogin);

    return {
      mensagem: 'Login realizado com sucesso',
      usuario: new ListaUsuarioDTO(usuario.id, usuario.nome),
    };
  }
}
