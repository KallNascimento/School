import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMasterComponent } from './components/dashboard-master/dashboard-master.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileMasterComponent } from './components/profile-master/profile-master.component';
import { StudentsMasterComponent } from './components/students-master/students-master.component';
import { TeachersMasterComponent } from './components/teachers-master/teachers-master.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardMasterComponent },
  { path: 'students', component: StudentsMasterComponent },
  { path: 'teachers', component: TeachersMasterComponent },
  { path: 'profile', component: ProfileMasterComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
