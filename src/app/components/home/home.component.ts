import { IProduct } from './../../interfaces/iproduct';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products:IProduct[]=[];
productNameNew:IProduct[]=[];
sum:number=0;
prodName:any;
prodPrice:any;

addProduct(product:IProduct){
  this.prodName=product.productName
  this.prodPrice=product.productPrice
    let isFound = false
      for(let x in this.products) {
        if(this.products[x].productName == product.productName) {
          isFound = true
        }
      }

    if(!isFound) {
      this.productNameNew.push(this.prodName);
      this.products.push(product);
      this.clcSumOfPrice()
    }
    else{
      alert('this product is exit')
    }

 
}
deleteProduct(index:number){
  this.products.splice(index,1)
  this.clcSumOfPrice()
}
clcSumOfPrice(){
  this.sum=0
    for (let i = 0; i < this.products.length; i++) {
     this.sum+= Number(this.products[i].productPrice);
    }
}
ngOnInit(): void {
}
}
