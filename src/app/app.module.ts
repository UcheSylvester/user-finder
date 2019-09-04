import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { UsersComponent } from "./users/users.component";
import { WelcomeComponent } from "./home/welcome.component";
import { UserDetailComponent } from './users/user-detail.component';

@NgModule({
  declarations: [AppComponent, UsersComponent, WelcomeComponent, UserDetailComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "users", component: UsersComponent },
      // { path: "users/:id", component: UserDetailComponent }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
