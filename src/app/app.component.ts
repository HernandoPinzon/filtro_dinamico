import { Component, Input } from '@angular/core';
import { User } from './models/user';
import { ApicallerService } from './services/apicaller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showList = false;
  selectedGender = "all";
  selectedStatus = "all";
  originalUsers: Array<User> = []
  users: Array<User> =  []
  constructor(private apiCaller: ApicallerService) {

  }

  public loadData(){
    this.apiCaller.get('https://randomuser.me/api/?results=40')
    .subscribe(response => {
      this.originalUsers = response.results.map((result: any) => {
        return new User(
            result['name']['first'] +" "+ result['name']['last'],
            result['gender'],
            result['email']
          )
      })
      this.users = this.originalUsers.map(user => user)
      this.showData();
      console.log(response);
    })
  }

  ngOnInit() {
    this.loadData();
  }

  public showData(){
    this.showList= true
  }

  public hideData(){
    //this.showList= false
  }

  public addFilter(){
    this.users= this.originalUsers.filter(user => {
      if (this.selectedGender != "all") 
      return user.status == this.selectedStatus && user.gender == this.selectedGender
        
      if (this.selectedStatus != "all") 
      return /* user.gender == this.selectedGender && */ user.status == this.selectedStatus

      return true;
    })
    console.log(this.selectedStatus)
    console.log(this.users)
  }

  onChangeGenre($event:any){
    this.selectedGender = $event.target.value;
    this.showData()
  }

  onChangeStatus($event:any){
    this.selectedStatus = $event.target.value;
    this.showData()
  }
}
