import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

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

  constructor(private router: Router) {}

  ngOnInit() {}

  handleLogin = () => {
    console.log(`username: ${this.username}`);
    this.invaildLogin = this.username !== "terri" || this.password !== "123";
    if (!this.invaildLogin) {
      this.router.navigate(["welcome", this.username]);
    }
  };
}
