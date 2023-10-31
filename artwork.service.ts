import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
interface Data{
  pagination : {
    
  },
  data : Array<any>,
  info : {},
  config : {}
}
interface Artwork{
  id: number;
  title: string;
  artist: string;
  image: string;
  referenceNum: number;
  description:string;
  department: string;
  artType: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  constructor(private http:HttpClient) { }
  getAllArtWorks() : Observable<Data>{
    return this.http.get<Data>("https://api.artic.edu/api/v1/artworks?page=2");
  
  }
  // getAllArtWorks(page: number, limit: number): Observable<Data> {
  //   const url = `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`;
  //   return this.http.get<Data>(url);
  // }

  // getArtworksByUrl(url: string): Observable<Data> {
  //   return this.http.get<Data>(url);
  // }
  searchArtWorks(searchTerm: string): Observable<Data> {
    const searchUrl = `https://api.artic.edu/api/v1/artworks/search`;
    const query = {
      'term[is_public_domain]': true,
      'q': searchTerm
    };
    return this.http.get<Data>(searchUrl, { params: query });
  }
  getPaginatedData(page : string) : Observable<Data>{
    return this.http.get<Data>('https://api.artic.edu/api/v1/artworks?page=' + page);
 }
   getartData(id : string) : Observable<any>{
    return this.http.get<any>('https://api.artic.edu/api/v1/artworks/' + id);
 }

 getDataBySearch(query : string) : Observable<any>{
  return this.http.get<any>('https://api.artic.edu/api/v1/artworks/search?q=' + query);
}
  getAllDatasOfSearch(id : string): Observable<any>{
    return this.http.get<any>('https://api.artic.edu/api/v1/artworks/?ids=' + id);
  }
  favorites: Artwork[] = [];
  addToFavorites(artwork: Artwork): void { // specify the type of the artwork parameter
    this.favorites.push(artwork);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  getFavorites(): Artwork[] { // specify the return type of the method
    const favoritesString = localStorage.getItem('favorites');
    if (favoritesString !== null) {
      this.favorites = JSON.parse(favoritesString);
    }
    return this.favorites;
  }
}
