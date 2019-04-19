import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./component/login/login.component";
import { ErrorComponent } from "./component/error/error.component";
import { AppRoutingModule } from "./app-routing.module";
import { WelcomeComponent } from "./component/welcome/welcome.component";
import { ListTodosComponent } from "./component/list-todos/list-todos.component";
import { MenuComponent } from "./component/menu/menu.component";
import { FooterComponent } from "./component/footer/footer.component";
import { LogoutComponent } from "./component/logout/logout.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    WelcomeComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
