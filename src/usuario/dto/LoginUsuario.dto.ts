import { IsString, IsEmail } from 'class-validator';

export class LoginUsuarioDTO {
  @IsEmail({}, { message: 'O email informado é inválido' })
  email: string;

  @IsString()
  senha: string;
}
