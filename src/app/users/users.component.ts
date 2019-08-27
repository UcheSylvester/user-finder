import { Component } from "@angular/core";

@Component({
  selector: "github-users",
  templateUrl: "./users.component.html"
})
export class UsersComponent {
  persons: any[] = [
    {
      userId: 1,
      fullName: "Leaf Rake",
      userName: "UcheSylvester",
      following: 13,
      followers: 14,
      imageUrl: "assets/images/uc.JPG"
    },
    {
      userId: 2,
      fullName: "Garden Cart",
      userName: "UcheSylvester",
      following: 13,
      followers: 14,
      imageUrl: "assets/images/uc.JPG"
    },
    {
      userId: 5,
      fullName: "Hammer",
      userName: "UcheSylvester",
      following: 13,
      followers: 14,
      imageUrl: "assets/images/uc.JPG"
    },
    {
      userId: 8,
      fullName: "Saw",
      userName: "UcheSylvester",
      following: 13,
      followers: 14,
      imageUrl: "assets/images/uc.JPG"
    }
  ];
}
