import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entity/user';
import { CreateUserParams, LoginUserParams, UpadateUserParams } from 'src/utails/type';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { jwtconstants } from 'src/user/constants';


@Injectable()
export class UserService {
    //connect database
    constructor(@InjectRepository(User) private userRepository:Repository<User>, private JwtService:JwtService){

    }
    findUser(){ //all user find

       return this.userRepository.find()

    }
    private  hashdata(data:string){
       return   bcrypt.hash(data,10);
    }
    async CreateUser(userdatail:CreateUserParams){
        const newuser= await this.userRepository.create({
            ...userdatail,
        })
        newuser.password=await this.hashdata(newuser.password) ;
        
       return this.userRepository.save(newuser);
    }
   async Upadateuser(id:number ,userdatail:UpadateUserParams){
    console.log("update user service =>", id)
    const newuser=await this.userRepository.findOne({ where: {id} });
    console.log(newuser)
    if(!newuser)throw new Error("user Not found")
     await this.userRepository.update({id}, userdatail);
    return await this.userRepository.findOne({ where: {id} });
    }
   async deleteeuser(id:number){
       try {
         const user =await this.userRepository.findOne({ where: {id} });
         if(!user)return  Error("user Not found");
        //  console.log(newuser)
         return this.userRepository.remove(user);
       } catch (error) {
         console.log(error)
       }
    }
    async LoginUser(userdatail:LoginUserParams){
       try {
        const user=await this.userRepository.findOne({where:{username:userdatail.username}});
        if(!user)return ("user Not found")
         const passwordCheck:boolean= await bcrypt.compare(userdatail.password,user.password);  
        
        if(!passwordCheck)return ("password Not match");
         const payload={ id: user.id, username: user.username }
        return {
            acces_Token:await this.JwtService.signAsync(payload,{})
        };
    }   catch (error) {
        throw new HttpException(error.message, null);
    }
      

    }
    get(userdatail:LoginUserParams){
        return userdatail;
    }
}
