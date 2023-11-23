import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Users } from './model/users.entity';
import { UtilsModule } from 'src/utils/@utils.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [TypeOrmModule.forFeature([Users]), ConfigModule, UtilsModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule { }