import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username = "terri";
  password = "terri";
  constructor() {}

  ngOnInit() {}

  handleLogin = () => {
    console.log(`username: ${this.username} password: ${this.password}`);
  };
}
