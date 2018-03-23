import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicationComponent } from './application/application.component';
import { AppRoutingModule } from './app-routing.module';
import { StatusService } from './status.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	FormsModule,
	HttpClientModule,
	HttpModule
  ],
  providers: [StatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
