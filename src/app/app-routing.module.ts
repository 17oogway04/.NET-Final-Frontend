import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FeedComponent } from './components/feed/feed.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "signin",
    component: SignInComponent
  },
  {
    path: "signup",
    component: SignUpComponent
  },
  {
    path: "Ark",
    component: FeedComponent
  },
  {
    path: "Ark/new",
    component: NewPostComponent
  },
  {
    path: "Ark/:id",
    component: EditPostComponent
  },
  {
    path: "home",
    component: HomePageComponent
  },
  {
    path: "logout",
    component: LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
