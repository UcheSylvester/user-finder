import { Component, OnInit } from "@angular/core";
import { IUsers } from "./users";

@Component({
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"]
})
export class UserDetailComponent implements OnInit {
  pageTitle: string = "User Detail";
  users: IUsers;

  constructor() {}

  ngOnInit() {}
}
