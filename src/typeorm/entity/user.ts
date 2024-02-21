import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:'user'}) // Table Name
   export class User{
        @PrimaryGeneratedColumn({type:'bigint'})
        id:number
        @Column({unique:true})
        username:string
        @Column()
        password:string
        @Column()
        createdAt:Date;
        @Column({nullable:true})
        authstrategy:string


   }