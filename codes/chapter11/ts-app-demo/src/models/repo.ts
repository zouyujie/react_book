export class Repo{
    name:string;
    size:number;
    description:string;
    language:string;
    created_at:string;
    constructor(repo:any){
        this.name=repo.name;
        this.size=repo.size;
        this.description=repo.description;
        this.language=repo.language;
        this.created_at=repo.created_at;
    }
}