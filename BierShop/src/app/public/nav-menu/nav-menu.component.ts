import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth-service.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  showMenu: any;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {

    var auth = this.showMenu = localStorage.getItem('authenticated');
    if (auth == null) {
      this.showMenu = false;
    } else {
      this.showMenu = true;
    }

    this.authService.showMenuEmitter.subscribe(
      s => this.showMenu = s
    );
  }

  logOut() {
    this.authService.logOut();
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}
