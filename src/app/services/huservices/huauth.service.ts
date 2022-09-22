import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HuauthService {


  constructor(public afs:AngularFirestore,
    public afAuth:AngularFireAuth,
    public router:Router,) { }

    Signout(){
      this.afAuth.signOut().then(()=>{
        this.router.navigate(['hu-sign-in']);
       });
    }

    async SignIn(email:string,password:string)
    {
      console.log('in');
      var s = 0;
      this.afs.collection("husers").get().toPromise().then(data=>data?.forEach(x=>{
        if(s!=1)
        {
          if(email==x.id)
          {
              s = 1;
              this.afs.collection("husers").doc(email).get().toPromise().then(data=>{
                var hospname = data?.get('hosp');
                this.afAuth.signInWithEmailAndPassword(email,password).then((val)=>{
                  this.router.navigate(["hu-select",hospname]);
              })
            })
            .catch((error)=>{
              window.alert(error.message);
            })
          }
        }
      })).then(val=>{
        if(s==0)
         {
        window.alert('HOSPITAL ID DOESN\'T EXIT')
          }
      });  
    }




}
