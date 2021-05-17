"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var user_1 = require("./models/user");
var repo_1 = require("./models/repo");
var options = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};
var UserService = /** @class */ (function () {
    function UserService() {
    }
    // getUserInfo(name:string){
    //     request.get(`https://api.github.com/users/${name}`,options,(error:any,response:any,body:any)=>{
    //       // console.log('body', body)
    //       let user:User=new User(body);
    //       console.log(user);
    //     });
    // }
    //引入回调函数
    UserService.prototype.getUserInfo = function (name, callback) {
        request.get("https://api.github.com/users/" + name, options, function (error, response, body) {
            var user = new user_1.User(body);
            callback(user);
        });
    };
    //获取仓库列表
    UserService.prototype.getReposByUser = function (name, callback) {
        request.get("https://api.github.com/users/" + name + "/repos", options, function (error, response, body) {
            var repos = body.map(function (m) {
                return new repo_1.Repo(m);
            });
            callback(repos);
        });
    };
    return UserService;
}());
exports.UserService = UserService;
