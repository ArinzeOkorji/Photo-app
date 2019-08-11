import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoAppService {
  searchQuery = 'African';
  Response;

  constructor(private http: HttpClient) { }

  callApi() {
    let client_id = '87d3ca2c809985b9a5edb63c02ffd219b5f4a31b19cae00a1f4686e2d5e4f6a5';

   return this.http.get(/* proxyurl +  */ `https://api.unsplash.com/search/photos?query=${this.searchQuery}&client_id=${client_id}`)

  }

}
