import { Component, OnInit } from "@angular/core";
import { IUsers } from "./users";

@Component({
  selector: "github-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  // listFilter: string = "Uchenna";
  _listFilter: string;

  // getting the listFilter
  get listFilter(): string {
    return this._listFilter;
  }

  // setting listFilter as input changes
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredUsers = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.users;
  }

  filteredUsers: IUsers[];
  users: IUsers[] = [
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

  // using event binding to search
  searchUsers(): void {
    console.log("searching for users");
    // console.log(e);
  }

  constructor() {
    this.filteredUsers = this.users;
    this.listFilter = "";
  }

  // filtering users
  performFilter(filterBy: string): IUsers[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.users.filter(
      (user: IUsers) =>
        user.username.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  ngOnInit(): void {
    console.log("in onInit");
  }
}
