import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { UsersPanelComponent } from './components/users-panel/users-panel.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { UpdateUserPanelComponent } from './components/update-user-panel/update-user-panel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UsersPanelComponent,
    AddUserComponent,
    DeleteUserComponent,
    UpdateUserPanelComponent,
    NavbarComponent,
    HomeComponent,
    ContactInfoComponent,
    UpdateUserComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome', component: HomeComponent},
      {path: 'add-user', component: MainComponent},
      {path: 'users', component: UsersPanelComponent},
      {path: 'user/:id?', component: UpdateUserComponent},
      {path: '**', component: HomeComponent},
      {path: '', component: HomeComponent},
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
