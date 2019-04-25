import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WelcomeDataService } from "src/app/service/data/welcome-data.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
  name = "";
  welcomeMessage = "";

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {
    this.route = route;
  }

  ngOnInit() {
    console.log(this.route.snapshot.params["name"]);
    this.name = this.route.snapshot.params["name"];
  }

  getWelcomeMessage() {
    this.service
      .executeHelloWorldBeanService()
      .subscribe(response => this.handleGetMessage(response));
  }

  handleGetMessage(data) {
    console.log(data);
    this.welcomeMessage = data.message;
  }
}
