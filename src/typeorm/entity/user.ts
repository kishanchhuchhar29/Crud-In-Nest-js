import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({name:'user'}) // Table Name
   export class User{
        @PrimaryGeneratedColumn({type:'bigint'})
        id:number
        @Column({unique:true})
        username:string
        @Column()
        password:string
        @Column()
        @CreateDateColumn()
        createdAt:Date;
        @Column()
        @UpdateDateColumn()
        updatedAt: Date;
        @Column()
        @DeleteDateColumn()
        deltedAt: Date;
   }