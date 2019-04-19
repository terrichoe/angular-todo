import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { HardcodedAuthenticationService } from "./hardcoded-authentication.service";

@Injectable({
  providedIn: "root"
})
export class RouteGuardService implements CanActivate {
  constructor(
    private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
    let canActivated: boolean = this.hardcodedAuthenticationService.isUserLogggedIn();
    if (!canActivated) {
      this.router.navigate(["login"]);
    }
    return canActivated;
  }
}
