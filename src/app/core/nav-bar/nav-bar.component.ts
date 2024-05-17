import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
 cuser:any
  constructor(private router : Router) { }

  ngOnInit(): void {
   this.cuser= localStorage.getItem("cuser")?.toUpperCase();
  }

  ShowHideMenu(){
    document.getElementsByTagName("body")[0].classList.toggle('toggle-sidebar');
  }

  goTo(a:string){
    this.router.navigate(['home',a]);
  }
  
  
  signOut(){
    localStorage.clear()
    this.router.navigateByUrl("/login");

  }

}
