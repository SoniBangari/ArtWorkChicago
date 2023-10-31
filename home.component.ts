import { Component,OnInit } from '@angular/core';

import { ArtworkService } from '../artwork.service';

interface Data{
  pagination : {},
  data : Array<any>,
  info : {},
  config : {}
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
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

constructor(private artworkService:ArtworkService){}
  // ngOnInit(){
  //   this.artworkService.getAllArtWorks().subscribe((data: Data) => {
  //     this.allInfo = data;
  //     this.dataInfo = this. allInfo.data;
  //   });
  // }
  // selectUpdate(selected : any){
  //   this.selection = selected.target.value;
  //   console.log(this.selection);
  // }
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

 
}
