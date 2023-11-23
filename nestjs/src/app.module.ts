import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { UsersModule } from './users/users.module';

import { Todo } from './todo/model/todo.entity'
import { Users } from './users/model/users.entity'
import { UtilsModule } from './utils/@utils.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // pg lib does not need a specify the env props if the default are used 
    // https://www.postgresql.org/docs/current/libpq-envars.html
    TypeOrmModule.forRoot({
      type: 'postgres',
      entities: [Todo, Users],
      synchronize: true,
    }), AuthModule, TodoModule, UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
