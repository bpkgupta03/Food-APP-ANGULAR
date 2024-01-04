import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-restro-items',
  templateUrl: './restro-items.component.html',
  styleUrls: ['./restro-items.component.css']
})
export class RestroItemsComponent {

  items:any[]=[];
  constructor(private masterService:MasterService,private activate:ActivatedRoute) {
      this.activate.params.subscribe((params:any)=>{
        // debugger;
        this.getRestroItemsByCategoryId(params.foodID);
      })
  }

  getRestroItemsByCategoryId(id:any){
    this.masterService.getRestroItemsById(id).subscribe((res:any)=>{
      console.log(res.data);
      this.items = res.data; 
    })
  }
}
