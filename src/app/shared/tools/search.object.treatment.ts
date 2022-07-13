import { Injectable } from '@angular/core';
import { Pagination, SearchObject, Sort } from '../models/utils';


@Injectable({ providedIn: 'root' })
export class SearchObjectTreatment {

    constructor() {
    }

    public treatementSearchObject(limit: Number, offSet: Number, nameCol: String, direction: String): SearchObject {
        var searchObject: SearchObject = new SearchObject();
        if (limit !== null) {
            var pagination: Pagination = new Pagination();
            //pagination.limit = limit;
            //pagination.offSet = offSet;
            searchObject.pagination = pagination;
        }

        if (nameCol !== null && direction !== null) {
            var sort: Sort = new Sort();
            sort.direction = direction;
            sort.nameCol = nameCol;
            searchObject.sort = sort;
        }

        return searchObject;
    }

}