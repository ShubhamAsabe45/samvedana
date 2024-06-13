import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { EventsComponent } from './events/events.component';
import { DonateComponent } from './donate/donate.component';
import { AboutComponent } from './about/about.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'contact',component:ContactComponent},
  {path:'blog',component:BlogComponent},
  {path:'event',component:EventsComponent},
  {path:'donate',component:DonateComponent},
  {path:'about',component:AboutComponent},
  {path:'volunteer',component:VolunteerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
