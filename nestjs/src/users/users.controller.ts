import { Controller, Get, Post, Put, Patch, Delete } from '@nestjs/common';
import { Body, Param } from '@nestjs/common';
import { UsersService } from "./users.service"
import { PasswordService } from 'src/utils/password.service';
import { Users } from "./model/users.entity"
import { CreateUser } from './users.validation';
import { ApiTags } from '@nestjs/swagger';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {

  constructor(
    private usersService: UsersService,
    private passwordService: PasswordService
  ) { }

  @Post()
  async create(@Body() form: CreateUser): Promise<Users> {
    const data = form as Users;
    return await this.usersService.create(data)
  }

  @Get()
  async findAll(): Promise<Users[]> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params: any): Promise<Users> {
    const { id } = params;
    return await this.usersService.findOne(id);
  }

  @Put(':id')
  async put(@Param() params: any, @Body() form: Users) {
    const { id } = params;
    return await this.usersService.save(id, form);
  }

  @Patch(':id')
  async patch(@Param() params: any, @Body() form: Users) {
    const { id } = params;
    return await this.usersService.save(id, form);
  }

  @Delete(':id')
  async remove(@Param() params: any): Promise<void> {
    const { id } = params;
    await this.usersService.remove(id);
  }
}