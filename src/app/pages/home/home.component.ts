import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import {STATIC_DATA_PATH, STATIC_IMAGES_PATH} from '../../app-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public dataPath: string = STATIC_DATA_PATH;
  public imagePath: string = STATIC_IMAGES_PATH+"item1.jpg";
  public categoryList: any = null;
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductListByCategory().subscribe((catData) => {
      this.categoryList = catData;
    });
  }

}
