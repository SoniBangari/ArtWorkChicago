import { Component,OnInit } from '@angular/core';
import { ArtworkService } from '../artwork.service';

import { HttpClient } from '@angular/common/http';


interface Data{
  pagination : {},
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
@Component({
  selector: 'app-art-work-collection',
  templateUrl: './art-work-collection.component.html',
  styleUrls: ['./art-work-collection.component.css']
})
export class ArtWorkCollectionComponent implements OnInit {
  allInfo : Data = {
    pagination: {},
    data: [],
    info: {},
    config: {}
  };

  dataInfo : any[] | undefined ;
  searchedData : any[] | undefined ;
  textChanged: string = "";
  selection : string = "";
  pageNo : number = 0;
  favorites: Artwork[] = [];

  constructor(private artworkService:ArtworkService){}
  
  ngOnInit(){
    this.artworkService.getAllArtWorks().subscribe((data: Data) => {
      this.allInfo = data;
      this.dataInfo = this. allInfo.data;
    });
  }
  selectUpdate(selected : any){
    this.selection = selected.target.value;
    console.log(this.selection);
  }
  // updateTextSearch(textSearched : any){
  //   this.textChanged = textSearched.target.value;
  //   console.log(this.textChanged)
  //   if(this.textChanged === ""){
  //     this.dataInfo = this. allInfo.data;
  //     this.searchedData = [];
  //   }
  //   else{
  //     if(this.selection === "1"){
  //       this.searchedData = this. allInfo.data?.filter(data => data.artist_title.toLowerCase().includes(this.textChanged.toLowerCase()));
  //       this.dataInfo = this. allInfo.data?.filter(data => data.artist_title.toLowerCase().includes(this.textChanged.toLowerCase()));
  //     }
  //     else if(this.selection === "2"){
  //       this.searchedData = this. allInfo.data?.filter(data => data.title.toLowerCase().includes(this.textChanged.toLowerCase()));
  //       this.dataInfo = this. allInfo.data?.filter(data => data.title.toLowerCase().includes(this.textChanged.toLowerCase()));
  //     }
  //     else{
  //     this.searchedData = this. allInfo.data?.filter(data => data.title.toLowerCase().includes(this.textChanged.toLowerCase()));
  //     this.dataInfo = this. allInfo.data?.filter(data => data.title.toLowerCase().includes(this.textChanged.toLowerCase()));
  //     const filterSearch = this. allInfo.data?.filter(data => data.title.toLowerCase().includes(this.textChanged.toLowerCase()));
  //     filterSearch.forEach(element => {
  //       this.searchedData?.push(element);
  //       this.dataInfo?.push(element);
  //     });
  //     }

  //   }
  // }
  updateTextSearch(textSearched: any) {
    this.textChanged = textSearched.target.value;
    if (this.textChanged === "") {
      this.dataInfo = this.allInfo.data;
      this.searchedData = [];
    } else {
      let searchType = "title";
      if (this.selection === "1") {
        searchType = "artist_title";
      }
      this.artworkService.searchArtWorks(this.textChanged).subscribe((data: Data) => {
        this.searchedData = data.data.filter(item => item[searchType].toLowerCase().includes(this.textChanged.toLowerCase()));
      });
    }
  }
  updatePageData(){
    this.artworkService.getPaginatedData(this.pageNo.toString()).subscribe((data) =>{
      this.allInfo = data;
      this.dataInfo = this.allInfo.data;
    })
  }

  prevPage(){
    if(this.pageNo==1){
      const prev = document.getElementsByClassName("prev")[0];
      prev.setAttribute("class","page-link prev");
    }
    else{
      this.pageNo -= 1;
      this.updatePageData();
    }
  }

  nextPage(){
    this.pageNo += 1;
    this.updatePageData();
  }
  
  addToFavorites(artwork: Artwork) { // specify the type of the artwork parameter
    this.artworkService.addToFavorites(artwork);
  }
}
