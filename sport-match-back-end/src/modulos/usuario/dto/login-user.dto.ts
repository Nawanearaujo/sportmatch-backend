import { IsEmail, IsNotEmpty, IsString, MinLength, MaxLength, Matches} from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty({ message: 'O e-mail é obrigatório.' })
  @IsEmail({}, { message: 'Formato de e-mail inválido.' })
  email: string;

  @IsNotEmpty({ message: 'A senha é obrigatória.' })
  @IsString()
  @MinLength(8, { message: 'A senha deve ter pelo menos 8 caracteres.' })
  @MaxLength(12, {message: 'A senha deve ter no máximo 12 caracteres.'})
  @Matches (/^(?=.*[0-9])(?=.*[!@#$%^&*])/, {message: 'A senha deve conter pelo menos um número e um caractere especial.'})
  senha: string;
}
