import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ArtWorkCollectionComponent } from './art-work-collection/art-work-collection.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { ArtworkService } from './artwork.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ArtWorkCollectionComponent,
    DocumentationComponent,
    ViewComponent,
    WishlistComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ArtworkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
