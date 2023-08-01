import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthFireService {

  constructor(private auth: Auth) { }

  createUser({ email='', password='' })   {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  loginUser({ email='', password='' })   {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logoutUser() {
    return signOut(this.auth);
  }
}
