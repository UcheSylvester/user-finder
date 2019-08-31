import { Component } from "@angular/core";
import { IUsers } from "./users";

@Component({
  selector: "github-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent {
  listFilter: string = "Uchenna";
  pageTitle: string = "GitHub Users";
  persons: IUsers[] = [
    {
      userId: 1,
      fullName: "Uchenna Sylvester Okoro",
      username: "UcheSylvester",
      following: 13,
      followers: 14,
      imageUrl: "assets/images/uc.JPG"
    },
    {
      userId: 2,
      fullName: "Uchenna Sylvester Okoro",
      username: "UcheSylvester",
      following: 13,
      followers: 14,
      imageUrl: "assets/images/uc.JPG"
    },
    {
      userId: 5,
      fullName: "Uchenna Sylvester Okoro",
      username: "UcheSylvester",
      following: 13,
      followers: 14,
      imageUrl: "assets/images/uc.JPG"
    },
    {
      userId: 8,
      fullName: "Uchenna Sylvester Okoro",
      username: "UcheSylvester",
      following: 13,
      followers: 14,
      imageUrl: "assets/images/uc.JPG"
    }
  ];
}
