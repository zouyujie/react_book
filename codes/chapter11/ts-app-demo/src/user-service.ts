import * as request from 'request';
import {User} from './models/user';
import {Repo} from './models/repo';
const options={
    headers: {
        'User-Agent': 'request'
      },
      json:true
}
export class UserService{
  // getUserInfo(name:string){
  //     request.get(`https://api.github.com/users/${name}`,options,(error:any,response:any,body:any)=>{
  //       // console.log('body', body)
  //       let user:User=new User(body);
  //       console.log(user);
  //     });
  // }
  //引入回调函数
  getUserInfo(name:string,callback:any){
    request.get(`https://api.github.com/users/${name}`,options,(error:any,response:any,body:any)=>{
      let user:User=new User(body);
      callback(user);
    })
  }
    //获取仓库列表
    getReposByUser(name:string,callback:any){
      request.get(`https://api.github.com/users/${name}/repos`,options,(error:any,response:any,body:any)=>{
        let repos:Repo[]=body.map((m:any)=>
          new Repo(m)
        );
        callback(repos);
      })
    }
}