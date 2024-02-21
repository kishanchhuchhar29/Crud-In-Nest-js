import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entity/user';
import { CreateUserParams, UpadateUserParams } from 'src/utails/type';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    //connect database
    constructor(@InjectRepository(User) private userRepository:Repository<User>){

    }
    findUser(){ //all user find

       return this.userRepository.find()

    }
    async CreateUser(userdatail:CreateUserParams){
        const newuser= await this.userRepository.create({
            ...userdatail,createdAt:new Date(),
        })
       return this.userRepository.save(newuser);
    }
   async Upadateuser(id:number ,userdatail:UpadateUserParams){
    const newuser=await this.userRepository.findOne({ where: {id} });
    if(!newuser)throw new Error("user Not found")
          const user= await this.userRepository.update({id},{...userdatail});
        
          return user;
    }
   async deleteeuser(id:number){
        const newuser=await this.userRepository.findOne({ where: {id} });
        if(!newuser)throw new Error("user Not found");
        return this.userRepository.delete({id});
    }
}
