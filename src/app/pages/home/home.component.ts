import { Component, OnInit } from '@angular/core';
import {STATIC_DATA_PATH, STATIC_IMAGES_PATH} from '../../app-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public dataPath: string = STATIC_DATA_PATH;
  public imagePath: string = STATIC_IMAGES_PATH+"item1.jpg";
  public list: number[] = [1,2,3,4,6,7,8,9];
  constructor() { }

  ngOnInit(): void {
  }

}
