import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoryList:any[]  = [];
  constructor(private masterService:MasterService,private router:Router) { }

  ngOnInit(): void {
    this.loadAllFoodCategories();
  }

  loadAllFoodCategories(){
    this.masterService.getAllFoodCategory().subscribe((res:any)=>{
      this.categoryList = res.data;
    },
    (error) => {
      console.error('Error fetching data:', error);
    })
  }

  navigate(categoryId:number){
      this.router.navigate(['/restroItems',categoryId]);
  }
}
