import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/resgiter/login/login.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

 

  
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {



  }

  ShowHideCollapse(a:string){
    var elt = document.getElementById(a) ;

      if (elt != null){
        if (elt.classList.contains("show")){
          elt.classList.remove('show')
        } 
          else {
            elt.classList.add('show') 
          }
          elt.classList.toggle('show')
        }

  }

}
