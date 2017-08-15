import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { IDisclosureRequest } from '../models/disclosurerequest.model';

@Injectable()
export class DisclosurerequestsService {
  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'https://localhost/disclosureautomationapi/api';
  }

  mockGetInProcessRequests(): Observable<IDisclosureRequest[]> {
    const mockDisclosureRequests: IDisclosureRequest[] = [
      {PackageType: 'NOI'},
      {PackageType: 'Initial LE'},
      {PackageType: 'Initial CD'},
    ];

    const min = 1;
    const max = mockDisclosureRequests.length;
    const indexToModify = Math.floor(Math.random() * (max - min + 1))

    const requestToSend: IDisclosureRequest[] = [
      mockDisclosureRequests[Math.floor(Math.random() * (max - min + 1))],
      mockDisclosureRequests[Math.floor(Math.random() * (max - min + 1))],
      mockDisclosureRequests[Math.floor(Math.random() * (max - min + 1))]
    ]

    return Observable.of(requestToSend);
  }

  getInProcessRequests(): Observable<IDisclosureRequest[]> {
    const url = `${this.baseUrl}/InProcessRequests`;
    return this.http.get(url).map((response: Response) => {
      return <IDisclosureRequest[]>response.json();
    })
  }

  getQueuedRequests(): Observable<IDisclosureRequest[]> {
    const url = `${this.baseUrl}/QueuedRequests`;
    return this.http.get(url).map((response: Response) => {
      return <IDisclosureRequest[]>response.json();
    })
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
