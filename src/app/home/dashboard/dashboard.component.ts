import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  animateTitle = false;
  animateSubtitle = false;
  constructor(private router:Router){}

  ngOnInit(): void {
    setTimeout(() => {
      this.animateTitle = true;
      setTimeout(() => {
        this.animateSubtitle = true;
      }, 100); // 1-second delay for subtitle animation
    }, 1000); // Short delay to trigger animation
  }

  volunteer(){
    this.router.navigate(['home/volunteer']);
  }
}
