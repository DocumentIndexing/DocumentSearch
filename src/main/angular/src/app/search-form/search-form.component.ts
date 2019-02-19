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
  searchFilter = new SearchFilter();

  formGroup = this.fb.group({
    terms: [''],
    highlight: [''],
  });

  constructor(private fb: FormBuilder) {  }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.formGroup.value);
    //
    // searchFilter.from(this.formGroup.value.)
    //
    // this.searchable(this.formGroup);
  }
}
