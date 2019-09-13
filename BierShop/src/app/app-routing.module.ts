// import { AuthGuard } from './shared/guards/auth-guard';
// import { NgModule } from "@angular/core";
// import { RouterModule, Routes } from "@angular/router";

// const routes: Routes = [
//     { path: '', loadChildren: 'src/app/public/public.module#PublicModule' },

//       {
//         path: 'private', loadChildren: 'src/app/private/private.module#PrivateModule',
//         canActivate: [
//           AuthGuard
//         ]
//       }
// ]

// @NgModule({
//     imports: [RouterModule.forRoot(routes, { useHash: true })],
//     exports: [RouterModule]
// })
// export class AppRoutingModule { }