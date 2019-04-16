import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { ErrorComponent } from "./error/error.component";
import { AppRoutingModule } from "./app-routing.module";
import { WelcomeComponent } from './welcome/welcome.component';
@NgModule({
  declarations: [AppComponent, LoginComponent, ErrorComponent, WelcomeComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
