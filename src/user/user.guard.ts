import { PassportStrategy } from "@nestjs/passport"
import { Strategy} from "passport-local"
import { UserService } from "./services/user/user.service"
import { Injectable, UnauthorizedException } from "@nestjs/common";


@Injectable()
export class Localstrategy extends PassportStrategy( Strategy){
      constructor(private Userservice:UserService){
        super();
      }
  validate(username:string ,password:string){
    
    const user=this.Userservice.LoginUser({username,password});
    console.log("inside Local     user.guard",user)  ;
    if(!user)throw new UnauthorizedException();
    return user;
  }

}