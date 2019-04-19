import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HardcodedAuthenticationService } from "../../service/hardcoded-authentication.service";

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

  constructor(
    private router: Router,
    private authenticationService: HardcodedAuthenticationService
  ) {}

  ngOnInit() {}

  handleLogin = () => {
    console.log(`username: ${this.username}`);
    this.invaildLogin = !this.authenticationService.authentication(
      this.username,
      this.password
    );
    if (!this.invaildLogin) {
      this.router.navigate(["welcome", this.username]);
    }
  };
}
