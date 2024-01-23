import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PersonComponent } from './person/person.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { AllplacesComponent } from './allplaces/allplaces.component';
import { AddplaceComponent } from './addplace/addplace.component';
import { UploadplaceimageComponent } from './uploadplaceimage/uploadplaceimage.component';
import { DisplayimageComponent } from './displayimage/displayimage.component';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';

import { AllplacesuserComponent } from './allplacesuser/allplacesuser.component';
import { DisplayimageuserComponent } from './displayimageuser/displayimageuser.component';
import { PlantripComponent } from './plantrip/plantrip.component';
import { CommonModule } from '@angular/common';
import { UsertripsComponent } from './usertrips/usertrips.component';
import { UserfeedbackComponent } from './userfeedback/userfeedback.component';
import { DisplayfeedbackComponent } from './displayfeedback/displayfeedback.component';
import { DisplayalluserComponent } from './displayalluser/displayalluser.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    PersonComponent,
    AdminloginComponent,
    AdminnavbarComponent,
    AllplacesComponent,
    AddplaceComponent,
    UploadplaceimageComponent,
    DisplayimageComponent,
    UsernavbarComponent,
    AllplacesuserComponent,
    DisplayimageuserComponent,
    PlantripComponent,
    UsertripsComponent,
    UserfeedbackComponent,
    DisplayfeedbackComponent,
    DisplayalluserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
