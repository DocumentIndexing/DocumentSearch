import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {query} from '@angular/animations';
import {Observable} from 'rxjs';
import {SearchResults} from './model/searchResponse';
import {SearchFilter} from './model/searchFilter';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


export class SearchService {

  constructor(private http: HttpClient) {
  }

  search(query: SearchFilter): Observable<SearchResults> {
    return this.http.post<SearchResults>('api/search/', query);
  }

}
