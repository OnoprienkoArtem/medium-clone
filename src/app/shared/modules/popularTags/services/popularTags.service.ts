import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PopularTagType } from 'src/app/shared/types/popularTag.type';

import { GetPopularTagsResponseInterface } from '../types/getPopularTagsResponse.interface';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PopularTagsService {

  constructor(private http: HttpClient) { }

  getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags';

    return this.http.get(url).pipe(
      map((response: GetPopularTagsResponseInterface) => {
        return response.tags;
      })
    );
  }
}
