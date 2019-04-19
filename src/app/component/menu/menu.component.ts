import { Component, OnInit } from "@angular/core";
import { HardcodedAuthenticationService } from "../../service/hardcoded-authentication.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  // isUserLogggedIn: boolean = false;
  constructor(
    private hardcodedAuthenticationService: HardcodedAuthenticationService // private isUserLogggedIn: boolean = false -> 내가 만든 메소드를 사용하기 원하면 @Injectable줘야함
  ) {}

  ngOnInit() {
    // this.isUserLogggedIn = this.hardcodedAuthenticationService.isUserLogggedIn();
  }
}
