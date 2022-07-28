let possibleStatus = ["Solved", "Open", "Pending"];

export class User{
    name: string;
    gender: string;
    email: string;
    status: string;


    constructor(name:string, gender:string, email:string){
        this.name = name;
        this.gender = gender;
        this.email = email;
        this.status = possibleStatus[Math.floor(Math.random() * 3)]
    }
}