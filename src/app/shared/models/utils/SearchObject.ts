import { Pagination } from './Pagination';
import { Sort } from './Sort';
import { CriteriaSearch } from './CriteriaSearch';

export class SearchObject {
	pagination?: Pagination;
	sort?: Sort;
	listSort?: Array<Sort> = [];
	dataSearch?: Array<CriteriaSearch> = [];
	listCol?: String[];
}