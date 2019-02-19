import {Component, OnInit} from '@angular/core';
import {Searchable} from '../model/searchable';
import {SearchFilter} from '../model/searchFilter';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, Searchable {

  searchable = this;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
  }

  search(filter: SearchFilter): void {
    console.log(filter);
    // this.searchService.search(filter).subscribe(s => console.log(s));
  }

}
