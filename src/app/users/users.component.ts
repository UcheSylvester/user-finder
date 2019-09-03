import { Component, OnInit } from "@angular/core";
import { IUsers } from "./users";
import { UsersService } from "./users.service";

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
  users: IUsers[];

  // using event binding to search
  searchUsers(): void {
    console.log("searching for users");
    // console.log(e);
  }

  constructor(private userSevice: UsersService) {}

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
    this.users = this.userSevice.getUsers();
    this.filteredUsers = this.users;
    this.listFilter = "";
  }
}
