import {SearchFilter} from './searchFilter';

export interface Searchable {
  search(filter: SearchFilter): void;
}
