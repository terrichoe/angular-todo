import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HardcodedAuthenticationService {
  constructor() {}

  authentication(username, password) {
    let isAuth: boolean;
    isAuth = username === "terri" && password === "123";
    if (isAuth) {
      sessionStorage.setItem("authenticaterUser", username);
    }
    return isAuth;
  }
  isUserLogggedIn() {
    let user = sessionStorage.getItem("authenticaterUser");
    return user !== null;
  }

  logout() {
    sessionStorage.removeItem("authenticaterUser");
  }
}
