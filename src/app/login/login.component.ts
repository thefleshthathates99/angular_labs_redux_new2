import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { 
        
  }

  ngOnInit() {

  }

  email:String = "";
  password:String = "";

  loginClicked(){
    console.log("Trying to connect to api/auth")

  }

};
