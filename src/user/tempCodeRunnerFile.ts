import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
// import { JwtService } from "@nestjs/jwt";

// //import { Request } from "@nestjs/common";
// import { jwtconstants } from "./constants";
// import { Request, Response } from 'express';

// // Extend the Request type to include headers.authorizatio
// interface CustomRequest extends Request {
//         headers: {
//           authorization?: string;
//         };}
// @Injectable()

// export class AuthGuard implements CanActivate{
    
//     constructor(private jwtservice:JwtService){

//     }
//     async canActivate(context: ExecutionContext):  Promise<boolean> {
//         const req=context.switchToHttp().getRequest();
//         const token= this.extractTokenFromHeader(req);
//         if(!token)throw new UnauthorizedException();
//         try{
//             const payload = await this.jwtservice.verifyAsync(
//                 token,
//                 {
//                   secret: jwtconstants.secret
//                 }
//               );

//               Request['user'] = payload;
//         }catch(error){
//             throw new UnauthorizedException();
//         }
//         return true;
//     }

//     private extractTokenFromHeader(request: Request): string | undefined {
//         const [type, token] = request.headers.authorization?.split(' ') ?? [];
//         return type === 'Bearer' ? token : undefined;
//       }

// }
