import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IDisclosureRequest } from './models/disclosurerequest.model';

@Injectable()
export class DisclosurerequestsService {
  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'https://localhost/disclosureautomationapi/api';
  }

  getDisclosureRequest(): Observable<IDisclosureRequest> {
    const url = `${this.baseUrl}/disclosurerequests`;
    return this.http.get(url).map((response: Response) => {
      return <IDisclosureRequest>response.json();
    })
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
