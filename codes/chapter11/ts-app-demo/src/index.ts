// console.log('轻轻地，我来了');
import {UserService} from './user-service';
let api:UserService =new UserService();
// api.getUserInfo('zouyujie');
import {User} from './models/user';
// api.getUserInfo('zouyujie',(user:User)=>{
//  console.log(user);
// });

import {Repo} from './models/repo';
// api.getReposByUser('zouyujie',(repos:Repo[])=>{
//     console.log(repos);
// });

import * as Lodash from 'lodash';
// //排序
// api.getReposByUser('zouyujie',(repos:Repo[])=>{
//     // let sortRepos:Repo[]=Lodash.sortBy(repos,[(repo:any)=>repo.size]);//size升序
//     let sortRepos:Repo[]=Lodash.sortBy(repos,[(repo:any)=>repo.size*-1]);//size降序
//     console.log(sortRepos);
// });

// //合并接口
// api.getUserInfo('zouyujie',(user:User)=>{
//     api.getReposByUser(user.name,(repos:Repo[])=>{
//     let sortRepos:Repo[]=Lodash.sortBy(repos,[(repo:any)=>repo.size*-1]);//size降序
//     user.repos=sortRepos;
//     console.log(user);
// });
// });
import url from 'url';
import express from 'express';
const app= express();
app.get('/github',(req,res)=>{
    let name:any=url.parse(req.url,true).query.name;
    api.getUserInfo(name,(user:User)=>{
    api.getReposByUser(user.name,(repos:Repo[])=>{
    let sortRepos:Repo[]=Lodash.sortBy(repos,[(repo:any)=>repo.size*-1]);//size降序
    user.repos=sortRepos;
    res.send(user);
});
});
})
app.listen(3000,()=>{
    console.log('服务器运行，监听端口3000')
})