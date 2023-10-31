import { Component,OnInit } from '@angular/core';
import { ArtworkService } from '../artwork.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id : string = "";
  data : any;
  constructor(private Httpservice : ArtworkService,private activatedRoute : ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id')!;
    });
    this.Httpservice.getartData(this.id).subscribe((data)=>{
      this.data = data.data;
    })
  }
}
