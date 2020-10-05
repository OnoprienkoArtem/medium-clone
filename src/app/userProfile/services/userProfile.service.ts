import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { SaveArticleResponseInterface } from 'src/app/shared/types/saveArticleResponse.interface';
import { environment } from 'src/environments/environment';
import { ArticleInterface } from 'src/app/shared/types/article.interface';

@Injectable()
export class UserProfileService {

  constructor(private http: HttpClient) { }

  
}
