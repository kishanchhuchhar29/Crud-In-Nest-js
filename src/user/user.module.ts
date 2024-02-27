import { Module } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './services/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entity/user';
import { JwtModule } from '@nestjs/jwt';
import {  PassportModule } from '@nestjs/passport';
import { jwtconstants } from './constants';
// import { JwtStrategy } from './guard.stregy';
import { Localstrategy } from './user.guard';
import { JwtStrategy } from './strategy/jwt.strategy';




@Module({
  imports:[PassportModule,TypeOrmModule.forFeature([User]),PassportModule,JwtModule.register({
    secret:'abc123',
    signOptions:{expiresIn:'1h'}
  }),],
  controllers: [UserController],
  providers: [UserService,Localstrategy,JwtStrategy],
  // exports:[UserService]
})
export class UserModule {}
