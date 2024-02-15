import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FeedComponent } from './components/feed/feed.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    FeedComponent,
    ProfilePageComponent,
    NewPostComponent,
    EditPostComponent,
    ViewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
