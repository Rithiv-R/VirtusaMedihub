import { Injectable,NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:any;
  constructor(
    public afs:AngularFirestore,
    public afAuth:AngularFireAuth,
    public router:Router,
    public ngZone:NgZone,
  ) {
  }

   async SignIn(email:string,password:string)
   {
       this.afAuth.signInWithEmailAndPassword(email,password).then((val)=>{
          this.router.navigate([""]);
      })
      .catch((error)=>{
        window.alert(error.message);
      })
   }

   async SignOut()
   {
     this.afAuth.signOut().then(()=>{
      this.router.navigate(['']);
     });
   }

   async SignUp(email:string,password:string,user:string)
   {
      this.afAuth.createUserWithEmailAndPassword(email,password).then(async (result)=>{   
      this.SetUserData(result.user,user).then(()=>{window.alert('User Account Registered Successfully!!');this.router.navigate(['']);});
     })
     .catch((error)=>{
       window.alert(error.message);
     })
   }

   SetUserData(user:any,person:any){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.email}`
    );
    const userData = {
      uid: user.email,
      email: user.email,
      displayName: person,
    };
    return userRef.set(userData, {
      merge: true,
    });
   }   

   async ForgetPass(passowrdResetEmail:string)
   {
     return this.afAuth.sendPasswordResetEmail(passowrdResetEmail).then(()=>{
       window.alert('Password Email Sent!');
     }).catch((error)=>{
      window.alert(error);
     });
   }

}