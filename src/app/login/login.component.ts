import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { 
        
  }

  ngOnInit() {
  }

  email:String = "";
  password:String = "";

  ;

  loginClicked(){
    console.log("Clicked the BUTTTON");
    if (this.email == "abc123@gmail.com" && this.password == "123"){
      this.router.navigateByUrl('/account');
    }
    else if (this.email == "new123@gmail.com" && this.password == "123"){
      this.router.navigateByUrl('/account');
    }
    else if (this.email == "old666@gmail.com" && this.password == "123"){
      this.router.navigateByUrl('/account');
    }
    else {
      alert("INCORRECT PASSWORD")
    };

  }

}
