import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { createuserdto } from 'src/user/dtos/createuser.dto';
import { UpadatUserdto } from 'src/user/dtos/upadateuser.dto';
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
             return this.UserService.CreateUser(createuserdto);
        }   
    @Put(':id')  //Handle if Id is string
      async upadateuserbyid(@Param('id',ParseIntPipe) id:number, @Body() UpadatUserdto:UpadatUserdto){
              await this.UserService.Upadateuser(id,UpadatUserdto);
       }    
    @Delete(':id')   
    async deleteuserbyid(@Param('id',ParseIntPipe) id:number){
        await this.UserService.deleteeuser(id);
 }  
}
