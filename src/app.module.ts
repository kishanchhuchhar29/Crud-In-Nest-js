import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entity/user';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'Kishan@123',
    database:'nestjs_mysql1',
    entities:[User],
    synchronize:true,
  }),UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
