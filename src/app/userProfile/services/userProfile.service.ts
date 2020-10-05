import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserProfileInterface } from '../types/userProfile.interface';
import { GetUserProfileResponseInterface } from '../types/getUserProfileResponse.interface';

@Injectable()
export class UserProfileService {

  constructor(private http: HttpClient) { }

  getUserProfile(slug: string): Observable<UserProfileInterface> {
    const fullUrl = `${environment.apiUrl}/profile/${slug}`;

    return this.http.get(fullUrl).pipe(
      map((response: GetUserProfileResponseInterface) => response.profile)
    );
  }
}
