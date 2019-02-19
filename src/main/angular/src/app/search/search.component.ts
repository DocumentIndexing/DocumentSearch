import {Component, OnInit} from '@angular/core';
import {SearchResults} from '../model/searchResponse';
import {Searchable} from '../model/searchable';
import {SearchFilter} from '../model/searchFilter';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, Searchable {

  searchable = this;

  constructor() {
  }

  ngOnInit() {
  }

  search(filter: SearchFilter): void {
    console.log(filter);
  }

}
