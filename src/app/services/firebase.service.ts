import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage){
  }

  getAll(entidad:string){
    return this.afs.collection(entidad).valueChanges();
  }


  setObj(entidad:string, obj:any, id:string = obj.id){
    return this.afs.collection(entidad).doc(id).set(obj, {merge: true});
  }

  getWithFilter(entidad:string, campo:string, value:any){
    return this.afs.collection(entidad, ref => ref.where(campo, '==', value)).valueChanges();
  }

  getTurnoByPaciente(value:string){
    return this.afs.collection("turnos", ref => ref.where("paciente.email", '==', value)).valueChanges();
  }

  getTurnoByEspecialista(value:string){
    return this.afs.collection("turnos", ref => ref.where("especialista.email", '==', value)).valueChanges();
  }

  getTurnoRealizado(campo:string, email:string){
    return this.afs.collection("turnos", ref => ref.where(campo, '==', email).where('estado', '==', 'realizado')).valueChanges();
  }

  getUsersWithFilter(campo:string, value:string){
    return this.afs.collection('users', ref => ref.where(campo, '==', value).where('habilitado', '==', true)).valueChanges();
  }

  // updateUser(user:UserInterface, status:boolean){
  //   return this.afs.collection('users').doc(user.email).update({
  //     habilitado: status
  //   });
  // }

  async uploadImage(email:string, img:any) : Promise<string>{
    let resp = '';
    try{
      let storageRef = this.storage.ref("/users/" + email);
      let imagen = await storageRef.putString(img, "data_url");
      
      resp = await imagen.ref.getDownloadURL();
    }
    catch(err){
      console.error(err);
      return resp;
    }
  }
}
