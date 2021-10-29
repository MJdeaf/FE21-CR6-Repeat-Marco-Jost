import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [{
  path:"", component: HomeComponent
},
{
  path: "blog", component: BlogComponent
},
{
  path: "travel", component: TravelComponent
},

{path: "contact", component: ContactComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
