import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  submitDetails(id, name, email):void {
    localStorage.setItem(id, JSON.stringify({_name : name, _email : email, _id : id}));
    alert(JSON.parse(localStorage.getItem(id))._name + " is added to the localStorage");
    
  }
}
