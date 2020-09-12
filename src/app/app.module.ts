import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { TopBarModule } from './shared/modules/top-bar/top-bar.module';

import { AuthInterceptor } from './auth/services/authinterceptor.service';
import { PersistanceService } from './shared/services/persistance.service';
import { GlobalFeedModule } from './globalFeed/globalFeed.module';
import { YourFeedModule } from './shared/modules/yourFeed/yourFeed.module';
import { TagFeedModule } from './shared/modules/tagFeed/tagFeed.module';
import { ArticleModule } from './article/article.module';
import { CreateArticleModule } from './createArticle/createArticle.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    StoreModule.forRoot({ router: routerReducer }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    TopBarModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    CreateArticleModule,
    ArticleModule,
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
