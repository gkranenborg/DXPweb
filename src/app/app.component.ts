import { Component, OnInit } from '@angular/core';
import { StatusService } from './status.service';
import { Status } from './status';
import { Version } from './status';
import { Appinstall } from './status';
import { Appversions } from './status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  interval: any;
  status: Status;
  version: Version;
  appinstall: Appinstall;
  appversions: Appversions;
  dbname: any;
  
  constructor(private statusService: StatusService) { }

  ngOnInit() {
  this.getStatus();
  this.getAppinstall();
  this.getVersion();
  this.getAppversions();
  this.interval = setInterval(() => {
    this.getStatus();
    }, 60000);
  }
  
  getStatus(): void {
  	this.statusService.getStatus()
  	.subscribe(status => this.status = status);
  }
  
  getVersion(): void {
  	this.statusService.getVersion()
  	.subscribe(version => this.version = version);
  }
  
  getAppinstall(): void {
  	this.statusService.getAppinstall()
  	.subscribe(appinstall => this.appinstall = appinstall);
  }
  
  getAppversions(): void {
  	this.statusService.getAppversions()
  	.subscribe(appversions => this.appversions = appversions);
    }
  

  
}