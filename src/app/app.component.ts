import { Component } from '@angular/core';
import {STATIC_DATA_PATH, STATIC_IMAGES_PATH} from './app-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title:string = 'tuljaiCraftClient';
  public dataPath: string = STATIC_DATA_PATH;
  public imagePath: string = STATIC_IMAGES_PATH+"1.jpg";
}
