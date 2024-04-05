import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
productName:string="";
price:number=0;

@Input()
productObj:any;

ngOnChange(){
  this.productName=this.productObj.productName;
  this.price=this.productObj.price;
}

@Output()
emitProductData:EventEmitter<any> = new EventEmitter();


addProduct(){
  var productObj={
    productName:this.productName,
   price:this.price,
  }
this.emitProductData.emit(productObj);
this.productName="";
this.price=0;

}


}
