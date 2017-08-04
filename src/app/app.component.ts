import { Component } from '@angular/core';
import { Member } from './member';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Employee Database';
  message = '';
  onclick():void{
    // console.log("ujjwla");
    
    // this.message = (JSON.parse(localStorage.getItem('ujjwal'))).token;
    
    // console.log(JSON.parse(localStorage.getItem('Ujjwal')));
  }
}
