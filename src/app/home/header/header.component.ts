import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  constructor(private router:Router){}
  ngOnInit(): void {
    
  }
  contact(){
    this.router.navigate(['home/contact']);
  }

  blog(){
    this.router.navigate(['home/blog']);
  }

  events(){
    this.router.navigate(['home/event']);
  }

  donate(){
    this.router.navigate(['home/donate']);
  }

  about(){
    this.router.navigate(['home/about']);
  }

  
  
  
}
