import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userObs = new BehaviorSubject<any>(null); 

  
  constructor(private fauth:AngularFireAuth) { 
    
  }

  logout(): Promise<void>{
    return this.fauth.signOut();
  }

  register(email:string, password:string): Promise<any>{
    return this.fauth.createUserWithEmailAndPassword(email,password);
  }

  login(email:string, password:string): Promise<any>{
    return this.fauth.signInWithEmailAndPassword(email,password);
  }

  refreshData(userParam:any){
    this.userObs.next(userParam);
  }
}
