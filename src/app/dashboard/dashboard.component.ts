import { Component, OnInit } from '@angular/core';
import { StatusService } from '../status.service';
import { Appinstall } from '../status';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  baseurl: any;
  browser: any;
  chatname = " Enter your name";
  appinstall: Appinstall;

  constructor(private statusService: StatusService) { }

  ngOnInit() {
    this.baseurl = window.location.protocol + "//" + window.location.hostname + ":";
    this.browser = this.detectIE();
    this.getAppinstall();
  }
  
  getAppinstall(): void {
  	this.statusService.getAppinstall()
  	.subscribe(appinstall => this.appinstall = appinstall);
  }
  
  detectIE(): any {
    let ua = window.navigator.userAgent;
    let msie = ua.indexOf('MSIE ');
    if (msie > 0) {
     return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    let trident = ua.indexOf('Trident/');
    if (trident > 0) {
      let rv = ua.indexOf('rv:');
      return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
    let edge = ua.indexOf('Edge/');
    if (edge > 0) {
      return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }
    return false;  
  }
  
}
