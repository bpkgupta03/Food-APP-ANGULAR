import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
 
  constructor(private http:HttpClient) { }

  getAllFoodCategory(){
    return this.http.get("https://freeapi.miniprojectideas.com/api/zomato/GetAllFoodCategory")
  }

  getRestroItemsById(id:any){
    return this.http.get("https://freeapi.miniprojectideas.com/api/zomato/GetFoodItemByCategory?categoryId="+id)
  }
}
