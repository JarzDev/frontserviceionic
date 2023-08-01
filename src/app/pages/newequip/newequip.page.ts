import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipo, Equips } from 'src/app/interfaces/equips';
import { ContactsService } from 'src/app/services/contacts.service';
import { EquipsService } from 'src/app/services/equips.service';

@Component({
  selector: 'app-newequip',
  templateUrl: './newequip.page.html',
  styleUrls: ['./newequip.page.scss'],
})
export class NewequipPage  {


  idCt : number;
  
  contacto: any ;

  form: FormGroup;

equip: Equips = new Equipo();

  constructor(private equipSvr:EquipsService, 
    private router:Router, 
    private fb:FormBuilder, 
    private contactSvr: ContactsService,
    private aRoute: ActivatedRoute) 
    { 
      this.idCt= Number(aRoute.snapshot.paramMap.get('id'));
      this.getContactByID(this.idCt);
      console.log(this.contacto);
    
    this.form = this.fb.group({
      marca: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]], 
      modelo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]], 
      serial: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      contador: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
     
     });
     
    

 }

 

getContactByID(idCt: number){

  this.contactSvr.getContactsById(this.idCt).subscribe((data) => {
    this.contacto = data;
    console.log(data);  
  } );
}


 createEquip(){
  this.equip.marca = this.form.value.marca;
    this.equip.modelo = this.form.value.modelo;
    this.equip.serial = this.form.value.serial;
    this.equip.contador = this.form.value.contador;
    this.equip.contacto_id = this.idCt;

   
      if(this.form.valid){
     this.equipSvr.createEquips(this.equip).subscribe(
      data => {
        console.log(data);
        
        
        
        
        alert ("Equipo Creado");
        alert ("navegar a ver equiopos");
      }
    );}else{
      alert ("Formulario Invalido");
    }
  
}

 

}