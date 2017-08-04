import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { EditMemberComponent } from './edit-member/edit-member.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMemberComponent,
    EditMemberComponent,
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
    {
      path : 'addNewMember',
      component : AddMemberComponent
    },
    {
      path : 'editMember',
      component : EditMemberComponent
    }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
