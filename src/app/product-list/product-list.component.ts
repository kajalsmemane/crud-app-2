import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productList:any=[];

  getProductData(productObj:any){
    this.productList.push(productObj);
    console.log(productObj);
  }
  
  selectedProductObj:any;
  editProductData(index:number){
    this.selectedProductObj = this.productList[index];
  }
  
}
