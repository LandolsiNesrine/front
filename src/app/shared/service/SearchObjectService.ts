import { Injectable } from '@angular/core';
import { Pagination, SearchObject, Sort } from '../models/utils';


@Injectable({ providedIn: 'root' })
export class SearchObjectService {

    constructor() {
    }

    public treatementSearchObject(limit: number, offSet: number, nameCol: String, direction: String): SearchObject {
        let searchObject;
        searchObject  = new SearchObject();
        if (limit !== null) {
            let pagination: Pagination = new Pagination();
            pagination.limit = limit;
            pagination.offSet = offSet;
            searchObject.pagination = pagination;
        }

        if (nameCol !== null && direction !== null) {
            searchObject.sort = new Sort();
            searchObject.sort.nameCol = nameCol;
            searchObject.sort.direction = direction;
        }
        return searchObject;
    }
}
