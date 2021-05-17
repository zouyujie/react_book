"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(user) {
        this.repos = [];
        this.bio = user.bio;
        this.name = user.name;
        this.blog = user.blog;
        this.avatar_url = user.avatar_url;
    }
    return User;
}());
exports.User = User;
