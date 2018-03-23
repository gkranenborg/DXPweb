import { Component, OnInit } from '@angular/core';
import { StatusService } from '../status.service';
import { Appversions } from '../status';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  appversions: Appversions;

  constructor(private statusService: StatusService) { }

  ngOnInit() {
    this.getAppversions();
  }

    getAppversions(): void {
  	this.statusService.getAppversions()
  	.subscribe(appversions => this.appversions = appversions);
    }

}
