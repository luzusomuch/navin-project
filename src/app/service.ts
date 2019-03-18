import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const serviceApiKey = "6d5d56f7cf494134a96cc6910549341a";
const headers = {
  'x-authentication': serviceApiKey
};
const API_URI = 'https://API.com/database/v1/consumer/get-enrollment-dispute-data';
const caseId = 'D0001400016';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  getListTabs(params: any = {}) {
    return this.http.post(API_URI, {caseId}, {headers});
    // return this.http.get(`assets/sample.json`, {headers, params});
  }
}