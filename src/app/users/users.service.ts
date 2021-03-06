import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { IUsers } from "./users";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  // fetching from an external source
  private gitHubUrl = "https://api.github.com/users/";

  constructor(private http: HttpClient) {}

  getUsers(): IUsers[] {
    return [
      {
        userId: 1,
        fullName: "Uchenna Sylvester Okoro",
        username: "Uche",
        following: 13,
        followers: 14,
        imageUrl: "assets/images/uc.JPG"
      },
      {
        userId: 2,
        fullName: "Uchenna Sylvester Okoro",
        username: "Sylvester",
        following: 13,
        followers: 14,
        imageUrl: "assets/images/uc.JPG"
      },
      {
        userId: 5,
        fullName: "Uchenna Sylvester Okoro",
        username: "OkoroSylvester",
        following: 13,
        followers: 14,
        imageUrl: "assets/images/uc.JPG"
      },
      {
        userId: 8,
        fullName: "Uchenna Sylvester Okoro",
        username: "Uchenna",
        following: 13,
        followers: 14,
        imageUrl: "assets/images/uc.JPG"
      }
    ];
  }
}
