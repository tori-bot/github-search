import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ReposComponent } from './components/repos/repos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchFormComponent,
    MyProfileComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule

  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
