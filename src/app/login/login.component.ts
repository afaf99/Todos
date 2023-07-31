import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username ='Afaf'
  password =''
  errorMessage ='Invalid Credentialsff'
  invalidLogin= false

  //Router


  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService  ){}

  ngOnInit(){
  }

  handleLogin(){
    // console.log(this.username);
    // if(this.username === "Afaf" && this.password=== 'dummy'){
      

      this.router.navigate(['welcome', this.username])

      this.invalidLogin = false
    
  }

  handleBasicAuthLogin(){
    // console.log(this.username);
    // if(this.username === "Afaf" && this.password=== 'dummy'){
        
         
        
            this.router.navigate(['welcome', this.username])
            this.invalidLogin = false
          
        
    }

    handleJWTBasicAuthLogin(){


      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
      }
  }
  
