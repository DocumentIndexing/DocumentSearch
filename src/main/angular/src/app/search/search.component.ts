import {Component, NgModule, OnInit} from '@angular/core';
import {Searchable} from '../model/searchable';
import {SearchFilter} from '../model/searchFilter';
import {SearchService} from '../search.service';
import {SearchHit} from '../model/searchResponse';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, Searchable {

  searchable = this;
  totalHits: number;
  hits: SearchHit[] = new Array<SearchHit>();
  private filter: SearchFilter;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
  }

  search(filter: SearchFilter): void {
    this.filter = filter;
    this.hits = [];
    this.query(filter);
  }

  private query(filter: SearchFilter) {
    this.searchService.search(filter).subscribe(s => {
      s.hits.hits.forEach(h => this.hits.push(h));
      this.totalHits = s.hits.total;
      console.log('Added  ' + s.hits.hits.length + ' resulting in : ' + this.hits.length);
    });
  }

  getHighlights(highlights: string[]) {
    let joinedHighlights: string;
    if (highlights) {
      joinedHighlights = '<small>' + highlights.join(' ... ') + '</small>';
    }
    return joinedHighlights;
  }

  onScroll() {
    this.filter.from = this.hits.length;
    this.query(this.filter);
    console.log('Scrolling');
  }
}
