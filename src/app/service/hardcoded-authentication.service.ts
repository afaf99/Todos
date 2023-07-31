import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  // username: string | undefined;
  // password: string | undefined;

  constructor() { }


  authenticate(username: string, password: string){
    
      return true;
   

  }

  isUserLoggedIn(){
    
     return true;
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }
}
