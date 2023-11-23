import { IsNotEmpty, IsString, IsEmail, IsStrongPassword } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUser {


  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  lastName: string;

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