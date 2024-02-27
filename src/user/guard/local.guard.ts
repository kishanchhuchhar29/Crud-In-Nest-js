import { ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

@Injectable()
export class Localguard extends AuthGuard('local'){

     canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        console.log("canActivate local guard");
        return super.canActivate(context);
    }
   
}