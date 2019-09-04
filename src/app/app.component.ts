import { Component } from "@angular/core";

@Component({
  selector: "github-root",
  template: `
    <nav class="nav navbar-expand navbar-light bg-light">
      <a class="navbar-brand" [routerLink]="['/welcome']">{{ title }}</a>
      <ul class="nav nav-pills">
        <li>
          <a class="nav-link" [routerLink]="['/welcome']">Home</a>
        </li>
        <li>
          <a class="nav-link" [routerLink]="['/users']">Users</a>
        </li>
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  title: string = "GitHub User Finder";
}
