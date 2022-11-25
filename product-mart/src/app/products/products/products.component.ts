import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductdataService } from './productdata.service';
import { STUDENTS } from 'src/mock-students';
import { Mystudents } from 'src/student';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
products : Mystudents ;
showData: any[] = [];
  constructor(private productDtaService:ProductdataService) { }

  ngOnInit(): void {
   
   this.getProducts();
   //this.getHeroes();
  }

  //-------------------------To get all the items-----------------
  //ERROR Error: Cannot find a differ supporting object '[object Object]' of type 'object'. 
  //NgFor only supports binding to Iterables such as Arrays.
 
  getProducts(): void {
    console.log(this.products,'ngn');
 
   this.productDtaService.getAllProducts().then(productdata => this.products = productdata);
    console.log(this.products,'mystue');
  }
  
  
}