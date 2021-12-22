import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './pages/home/home.component';
import { CraftAndGiftsComponent} from './pages/craft-and-gifts/craft-and-gifts.component';
import { HandmadeStuffComponent} from './pages/handmade-stuff/handmade-stuff.component';
import { ContactUsComponent} from './pages/contact-us/contact-us.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'craftAndGifts' , component: CraftAndGiftsComponent},
  {path: 'handmadeStuff' , component: HandmadeStuffComponent},
  {path: 'contactUs' , component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
