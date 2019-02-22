import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {Searchable} from '../model/searchable';
import {SearchFilter} from '../model/searchFilter';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Input() searchable: Searchable;

  formGroup = this.fb.group({
    term: [''],
    highlight: [''],
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  buildFilter(): SearchFilter {
    const searchFilter = new SearchFilter();
    const highlightCheckbox = 'highlight';
    const termField = 'term';

    searchFilter.highlight = this.getCriteria(highlightCheckbox);
    searchFilter.term = this.getCriteria(termField);
    return searchFilter;
  }


  private getCriteria(highlightCheckbox: string) {
    return this.formGroup.get(highlightCheckbox).value;
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.formGroup.value);

    this.searchable.search(this.buildFilter());
  }
}
