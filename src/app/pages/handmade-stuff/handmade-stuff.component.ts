import { Component, OnInit } from '@angular/core';
import { STATIC_DATA_PATH, STATIC_IMAGES_PATH } from 'src/app/app-constants';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-handmade-stuff',
  templateUrl: './handmade-stuff.component.html',
  styleUrls: ['./handmade-stuff.component.scss']
})
export class HandmadeStuffComponent implements OnInit {
  public dataPath: string = STATIC_DATA_PATH;
  public imagePath: string = STATIC_IMAGES_PATH;
  public productListByCatgory: any = null;
  constructor(private prodctService: ProductService) { }

  ngOnInit(): void {
    this.prodctService.getProductListByCategory().subscribe((products) =>{
      this.productListByCatgory = products;
    });
  }

}
