import { AuthService } from './../services/auth-service.service';
import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { DashboardComponent } from "src/app/private/dashboard/dashboard.component";

@Injectable()
export class LoginDeactivateGuard implements CanDeactivate<DashboardComponent> {

constructor(private authService: AuthService) {}
 
  canDeactivate(
    component: DashboardComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {

    var valueConfirm = confirm('Deseja realmente sair?');
    if (valueConfirm){
      this.authService.logOut();
      return true;
    }
    return false;
  }

}