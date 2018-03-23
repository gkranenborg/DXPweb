import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Status } from './status';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StatusService {

  constructor(private http: HttpClient) {
	}
  
  public getStatus(): Observable<any> {
         return this.http.get("./assets/STATUSresult.json");
  }
  
  public getVersion(): Observable<any> {
         return this.http.get("./assets/version.json");
  }
  
  public getAppversions(): Observable<any> {
         return this.http.get("./assets/appversions.json");
  }
  
  public getAppinstall(): Observable<any> {
         return this.http.get("./assets/appinstall.json");
  }

}
