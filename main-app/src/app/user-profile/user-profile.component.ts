import { Component, OnInit } from '@angular/core';

import { UpdateUserModel } from './../models/update-user.model';
import { UserModel } from './../models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {

   public user: UserModel;

   public ngOnInit(): void {
      this.user = {
         username: 'user1337',
         email: 'user1337@gmail.com',
         city: 'Berlin',
         street: 'Hauptstraße',
         streetNumber: '12',
         messages: [
            'Please check your spam folder for a new IPhone',
            'The weather is quite nice, isn\'t it?',
         ],
      };
   }

   public updateUser(event: UpdateUserModel): void {
      console.log('Event: ', event);
      this.user.username = event.username;
      this.user.email = event.email;
   }
}
