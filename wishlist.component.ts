import { Component,OnInit } from '@angular/core';
import { ArtworkService } from '../artwork.service';

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
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{
  artworkData: Artwork[] = [];
  favorites: any[] = [];

  constructor(private apiService: ArtworkService) { }

  ngOnInit() {
    this.getArtworks();
    this.getFavorites();
  }

  // Get all artworks
  getArtworks() {
    this.apiService.getAllArtWorks().subscribe((response: any) => {
      this.artworkData = response.data as Artwork[]; 
    });
  }

  // Get user's favorite artworks
  getFavorites() {
    this.favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    console.log(this.favorites)
  }

  // Get image URL for a given artwork
  getImageUrl(imageId: string): string  {
    return `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
  }

  // Filter artworks based on favorites
  filterByFavorites() {
    const favoriteArtworks = this.artworkData.filter((artwork: any) =>
      this.favorites.includes(artwork.id.toString())
    );
    return favoriteArtworks || [];
  }



}
