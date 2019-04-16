import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username = "terri";
  password = "terri";
  invaildLogin = false;
  errorMessage = "Invaild Credentials";

  constructor() {}

  ngOnInit() {}

  handleLogin = () => {
    console.log(`username: ${this.username}`);
    this.invaildLogin = this.username !== "terri" || this.password !== "123";
    if (!this.invaildLogin) {
      console.log(this.errorMessage);
    }
  };
}
