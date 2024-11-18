import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';
import { LoginUsuarioDTO } from './dto/LoginUsuario.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  async criaUsuario(dadosDoUsuario: CriaUsuarioDTO) {
    const usuarioEntity = new UsuarioEntity();

    usuarioEntity.email = dadosDoUsuario.email;
    usuarioEntity.nome = dadosDoUsuario.nome;

    // Hash da senha antes de salvar
    const salt = await bcrypt.genSalt();
    usuarioEntity.senha = await bcrypt.hash(dadosDoUsuario.senha, salt);

    return this.usuarioRepository.save(usuarioEntity);
  }

  async listaUsuarios() {
    const usuariosSalvos = await this.usuarioRepository.find();
    const usuariosLista = usuariosSalvos.map(
      (usuario) => new ListaUsuarioDTO(usuario.id, usuario.nome),
    );
    return usuariosLista;
  }

  async buscaPorEmail(email: string) {
    return this.usuarioRepository.findOne({ where: { email } });
  }

  async atualizaUsuario(id: string, novosDados: AtualizaUsuarioDTO) {
    if (novosDados.senha) {
      // Atualiza a senha com hash
      const salt = await bcrypt.genSalt();
      novosDados.senha = await bcrypt.hash(novosDados.senha, salt);
    }
    await this.usuarioRepository.update(id, novosDados);
  }

  async deletaUsuario(id: string) {
    await this.usuarioRepository.delete(id);
  }

  // Novo método para validar login
  async validaLogin(dadosLogin: LoginUsuarioDTO) {
    const usuario = await this.buscaPorEmail(dadosLogin.email);

    if (!usuario) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    // Verifica se a senha está correta
    const senhaCorreta = await bcrypt.compare(dadosLogin.senha, usuario.senha);
    if (!senhaCorreta) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    return usuario;
  }
}
