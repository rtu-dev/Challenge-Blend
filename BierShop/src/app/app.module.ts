import { LoginDeactivateGuard } from './shared/guards/login-deactivate.guard';
// import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './public/nav-menu/nav-menu.component';
import { AuthService } from './shared/services/auth-service.service';
import { AuthGuard } from './shared/guards/auth-guard';
import { HttpsRequestInterceptor } from './shared/services/interceptor';




@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([

      { path: '', loadChildren: 'src/app/public/public.module#PublicModule' },      
      {
        path: 'private', loadChildren: 'src/app/private/private.module#PrivateModule',
        canActivate: [
          AuthGuard
        ],
        canDeactivate: [
          // LoginDeactivateGuard
        ]
      }
    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    FormsModule,
    ReactiveFormsModule,
    LoginDeactivateGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
