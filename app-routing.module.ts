import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtWorkCollectionComponent } from './art-work-collection/art-work-collection.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewComponent } from './view/view.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path:"nav",
    component:NavbarComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"artColl",
    component:ArtWorkCollectionComponent
  },
  {
    path:"docu",
    component:DocumentationComponent
  },
  {
    path : "view/:id",
    component : ViewComponent
  },
  {
    path : "favorites",
    component : WishlistComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
