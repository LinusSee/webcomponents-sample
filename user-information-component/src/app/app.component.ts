import { Component } from '@angular/core';
import { UpdateUserModel } from './models/update-user.model';
import { UserModel } from './models/user.model';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
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
      this.user.username = event.username;
      this.user.email = event.email;
   }
}
