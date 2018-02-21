import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import { AllPostsComponent } from "./all-posts/all-posts.component";
import { FollowingComponent } from "./following/following.component";
import { MyPostsComponent } from "./my-posts/my-posts.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { NgModule } from "@angular/core";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { RouteGuard } from "./auth/route-guard";

const appRoutes: Routes =[
  {path: '',component: HomeComponent} , 
  {path: 'allposts',component: AllPostsComponent, canActivate:[RouteGuard]},  
  {path: 'following',component: FollowingComponent, canActivate:[RouteGuard]},  
  {path: 'myposts',component: MyPostsComponent, canActivate:[RouteGuard]} , 
  {path: 'favorites',component: FavoritesComponent,canActivate:[RouteGuard]},  
  {path: 'signup',component: SignupComponent}, 
  {path: 'login',component: LoginComponent},
  
];


@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}