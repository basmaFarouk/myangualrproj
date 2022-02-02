import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/_models/product/category.model';
import { Product } from 'src/app/_models/product/product.model';
import { CategoryService } from 'src/app/_services/product/category.service';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  categoryArray: Category[] =[]
  productArray: Product []=[]
  filteredProducts: Product[] =[]
  productnum!:Product
  categorys:any ='';
  
  constructor(route: ActivatedRoute,private categoryService: CategoryService,  private productService: ProductService) { 
    route.queryParamMap.subscribe(params => {
      this.categorys = params.get('categoryy')
      console.log(this.categorys)
      
      this.filteredProducts = (this.categorys) ?
      this.productArray.filter(p => p.category===this.categorys) : this.productArray
    })
  }

  ngOnInit(): void {
    this.getAllCategories()
    this.getAllProducts()
    // this.getbyId()
  }
  getAllCategories(){
    this.categoryArray = this.categoryService.getAllCategories()
    console.log(this.categoryArray)
  }

  getAllProducts(){
    // this.productArray = this.productService.getAllProducts()
  }
  

  // getbyId(){
  //   const id = this.productnum.id
  //   console.log(id)
  //   // this.productnum = this.productService.getProductById(id)!
  //   // console.log(this.product)

  // }

}

