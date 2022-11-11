import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {heroHome, heroAcademicCap,heroUserGroup, heroUserCircle} from '@ng-icons/heroicons/outline'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeachersMasterComponent } from './components/teachers-master/teachers-master.component';
import { StudentsMasterComponent } from './components/students-master/students-master.component';
import { ProfileMasterComponent } from './components/profile-master/profile-master.component';
import { DashboardMasterComponent } from './components/dashboard-master/dashboard-master.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgIconsModule } from '@ng-icons/core';

@NgModule({
  declarations: [
    AppComponent,
    TeachersMasterComponent,
    StudentsMasterComponent,
    ProfileMasterComponent,
    DashboardMasterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({heroHome, heroAcademicCap,heroUserGroup, heroUserCircle})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
