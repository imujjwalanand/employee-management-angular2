import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {
  values = [];
  setNewDetails:boolean = false;
   list : string = "List of Employees!";
   keys : string[] = Object.keys(localStorage);
   keyList:string[] = [];
   names : string[] = [];
   emails :string[] = [];
   constructor() {
    for (var i = 0; i < this.keys.length; i++) {
      this.keyList.push(  JSON.parse(localStorage.getItem(this.keys[i]))._id );
      this.names.push(  JSON.parse(localStorage.getItem(this.keys[i]))._name  );
      this.emails.push(  JSON.parse(localStorage.getItem(this.keys[i]))._email  );
    }
   }
 
  
   
  ngOnInit() {
    
  }
  getDetails(id):void{

    this.setNewDetails = true;

    // alert(this.keyList);
    //  localStorage.setItem(id, JSON.stringify({_name : name, _email : email}));
    
  //   alert(localStorage.getItem(id));
  //  alert(this.values[0]);
    // alert(JSON.parse(localStorage.getItem(id))._name);
  }
  submitNewDetails (id, name, email){
    localStorage.setItem(id, JSON.stringify({_name : name, _email : email}));
    // location.reload();
    this.setNewDetails = !this.setNewDetails;
  }
  goBack(){
    this.setNewDetails = !this.setNewDetails;
  }
}
