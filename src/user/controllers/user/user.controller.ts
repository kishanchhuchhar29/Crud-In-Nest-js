import {Request,Req, Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { Loginuserdto } from 'src/user/dtos/Login.dto';
import { createuserdto } from 'src/user/dtos/createuser.dto';
import { UpadatUserdto } from 'src/user/dtos/upadateuser.dto';
import { Localguard } from 'src/user/guard/local.guard';
import { JwtAuthGuard } from 'src/user/jwt.guard';
import { UserService } from 'src/user/services/user/user.service';



@Controller('user')
export class UserController {
    constructor(private UserService:UserService){}
    @Get()
       Getuser(){
           return this.UserService.findUser();
       }
    @Post()
        createuser(@Body() createuserdto:createuserdto){
            return   this.UserService.CreateUser(createuserdto);
        }   
    @Put('/update')  //Handle if Id is string
    @UseGuards(JwtAuthGuard)
       async upadateuserbyid(@Request() req ,@Body() UpadatUserdto:UpadatUserdto){
        console.log(req.user.id)
              return await this.UserService.Upadateuser(req.user.id,UpadatUserdto);
       }    
 
    @Delete('/delete')   
    @UseGuards(JwtAuthGuard)
    async deleteuserbyid(@Request() req){
      try {
         console.log("inside delete route");
        console.log("req.user",req.user);
          const userId = req.user.id;
          
          if (!req.user) {
              // Handle the case when req.user is undefined
              throw new UnauthorizedException('User not authenticated');
            }
          console.log("req.user",req.user);
          await this.UserService.deleteeuser(userId);
      } catch (error) {
        console.log(error)
      }
 }  

    // @HttpCode(HttpStatus.OK)
    //@UseGuards(AuthGuard)
    @Post('/Login')
    @UseGuards(Localguard)
      async LoginUser(@Body() logInDto:Loginuserdto){
     
             return await this.UserService.LoginUser(logInDto); 

      }
 // @UseGuards(JwtAuthGuard)
  // @Get('/profile')
//    async getProfile(@Body() @Request() req) {
//     console.log("req.user",req.user);
//      return await this.UserService.get(req.user);
//    }
}
