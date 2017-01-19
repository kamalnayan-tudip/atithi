import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from 'app/Atithi_Login/login.component';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from 'app/Atithi_Signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { signupRoutes } from "app/Atithi_Routing/atithi_routing";
import { PostsComponent } from './posts/posts.component';
import { PostsService } from  './posts.service';
import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PostsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(signupRoutes,DashboardComponent)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
