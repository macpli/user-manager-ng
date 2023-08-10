import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './components/main/main.component';
import { UsersPanelComponent } from './components/users-panel/users-panel.component';
import { RouterModule } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { HeaderComponent } from './components/header/header.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UsersPanelComponent,
    AddUserComponent,
    HeaderComponent,
    DeleteUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome', component: MainComponent},
      {path: 'users', component: UsersPanelComponent},
      {path: '**', component: MainComponent},
      {path: '', component: MainComponent},
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
