import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayListComponent } from './day-list/day-list.component';
import { DayDetailsFormMDComponent } from './day-details-form-md/day-details-form-md.component';
import { FormsModule, ReactiveFormsModule}from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { DayService } from './day.service';


@NgModule({
  declarations: [
    AppComponent,
    DayListComponent,
    DayDetailsFormMDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [DayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
