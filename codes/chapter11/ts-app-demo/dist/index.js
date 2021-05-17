"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log('轻轻地，我来了');
var user_service_1 = require("./user-service");
var api = new user_service_1.UserService();
// api.getReposByUser('zouyujie',(repos:Repo[])=>{
//     console.log(repos);
// });
var Lodash = __importStar(require("lodash"));
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
var url_1 = __importDefault(require("url"));
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/github', function (req, res) {
    var name = url_1.default.parse(req.url, true).query.name;
    api.getUserInfo(name, function (user) {
        api.getReposByUser(user.name, function (repos) {
            var sortRepos = Lodash.sortBy(repos, [function (repo) { return repo.size * -1; }]); //size降序
            user.repos = sortRepos;
            res.send(user);
        });
    });
});
app.listen(3000, function () {
    console.log('服务器运行，监听端口3000');
});
