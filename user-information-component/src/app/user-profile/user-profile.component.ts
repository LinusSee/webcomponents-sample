import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { UpdateUserModel } from '../models/update-user.model';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-user-profile',
  styleUrls: ['./user-profile.component.css'],
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {

   @Input()
   public user: UserModel;

   @Output()
   public updateUser: EventEmitter<UpdateUserModel> = new EventEmitter();

   public model: UpdateUserModel;

  constructor() { }

  public ngOnInit(): void {
     this.model = this.emptyModel();
  }

  public onSubmit(): void {
     this.updateUser.emit(this.model);
     this.model = this.emptyModel();
  }

  private emptyModel(): UpdateUserModel {
     return {
       username: '',
       email: '',
     };
 }
}
