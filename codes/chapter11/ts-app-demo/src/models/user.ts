import {Repo} from './repo'
export class User{
    bio:string;
    avatar_url:string;
    name:string;
    blog:string;
    repos:Repo[]=[];
    constructor(user:any){
      this.bio=user.bio;
      this.name=user.name;
      this.blog=user.blog;
      this.avatar_url=user.avatar_url;
    }
} 