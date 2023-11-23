import { Module } from '@nestjs/common';
import { UtilsModule } from 'src/utils/@utils.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { AuthGuard } from './auth.guard';
@Module({
  imports: [
    ConfigModule,
    UtilsModule,
    UsersModule,
    JwtModule.registerAsync({
      useFactory: () => {
        return {
          global: true,
          secret: process.env.JWT_SECRET,
          signOptions: { expiresIn: process.env.JWT_EXPIRE || '60s' },
        }
      }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, {
    provide: "APP_GUARD",
    useClass: AuthGuard
  }],
})
export class AuthModule { }