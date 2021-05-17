"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repo = /** @class */ (function () {
    function Repo(repo) {
        this.name = repo.name;
        this.size = repo.size;
        this.description = repo.description;
        this.language = repo.language;
        this.created_at = repo.created_at;
    }
    return Repo;
}());
exports.Repo = Repo;
