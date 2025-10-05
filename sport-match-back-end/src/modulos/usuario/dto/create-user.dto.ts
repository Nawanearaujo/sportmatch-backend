import { 
  IsString, 
  IsEmail, 
  IsEnum, 
  IsNotEmpty, 
  MinLength, 
  MaxLength, 
  Matches, 
  IsOptional, 
  IsDateString 
} from 'class-validator';
import { UserRole } from '../enums/user-role.enum';

export class CreateUserDto {
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  @IsString()
  nome: string;

  @IsOptional()
  @IsString()
  razao_social?: string;

  @IsOptional()
  @Matches(/^\d{11}$/, { message: 'O CPF deve conter 11 dígitos numéricos.' })
  cpf?: string;

  @IsOptional()
  @Matches(/^\d{14}$/, { message: 'O CNPJ deve conter 14 dígitos numéricos.' })
  cnpj?: string;

  @IsOptional()
  @IsDateString({}, { message: 'A data de nascimento deve estar em formato válido (DD-MM-AAAA).' })
  data_nascimento?: string;

  @IsOptional()
  @IsString()
  genero?: string;

  @IsOptional()
  @IsString()
  telefone?: string;

  @IsOptional()
  @IsString()
  usuario?: string; // nome usado para identificação dentro do aplicativo, não é utilizado para fazer login

  @IsNotEmpty({ message: 'O e-mail é obrigatório.' })
  @IsEmail({}, { message: 'Formato de e-mail inválido.' })
  email: string;

  @IsNotEmpty({ message: 'A senha é obrigatória.' })
  @IsString()
  @MinLength(8, { message: 'A senha deve ter no mínimo 8 caracteres.' })
  @MaxLength(12, { message: 'A senha deve ter no máximo 12 caracteres.' })
  @Matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])/, {
    message: 'A senha deve conter pelo menos um número e um caractere especial.',
  })
  senha: string;

  @IsOptional()
  @IsString()
  endereco?: string;

  @IsNotEmpty({ message: 'O perfil é obrigatório.' })
  @IsEnum(UserRole, { message: 'O perfil deve ser organizador, atleta, locador ou patrocinador.' })
  perfil: UserRole;

  @IsOptional()
  @IsString({ each: true })
  esportes_interesse?: string[];
}
