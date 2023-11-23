import { IsNotEmpty, IsString, IsEmail, IsStrongPassword } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class Login {
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  email: string;

  @IsStrongPassword()
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  password: string;
}