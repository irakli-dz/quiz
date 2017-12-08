import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatCardModule} from '@angular/material';
import { QuestionComponent } from './question.component';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from './app.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent, QuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, MatInputModule, MatCardModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
