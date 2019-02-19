import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SearchResults} from './model/searchResponse';
import {SearchFilter} from './model/searchFilter';
import {Injectable} from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) {
  }

  search(query: SearchFilter): Observable<SearchResults> {
    return this.http.post<SearchResults>('/api/search/', query);
  }

}
