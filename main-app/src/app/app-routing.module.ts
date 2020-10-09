import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogfileAnalysisComponent } from './logfile-analysis/logfile-analysis.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
   {
      path: 'user-profile',
      component: UserProfileComponent,
   },
   {
      path: 'logfile-analysis',
      component: LogfileAnalysisComponent,
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
