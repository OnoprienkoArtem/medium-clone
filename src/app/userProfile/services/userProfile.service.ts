import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserProfileInterface } from '../types/userProfile.interface';
import { GetUserProfileResponseInterface } from '../types/getUserProfileResponse.interface';

import { environment } from 'src/environments/environment';

@Injectable()
export class UserProfileService {

  constructor(private http: HttpClient) { }

  getUserProfile(slug: string): Observable<UserProfileInterface> {
    const fullUrl = `${environment.apiUrl}/profiles/${slug}`;

    return this.http.get(fullUrl).pipe(
      map((response: GetUserProfileResponseInterface) => response.profile)
    );
  }
}
