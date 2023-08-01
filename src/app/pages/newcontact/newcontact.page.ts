import { Component,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contacto, Contacts } from 'src/app/interfaces/contacts';
import { ClientsService }  from 'src/app/services/clients.service';
import { ContactsService } from 'src/app/services/contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Client } from 'src/app/interfaces/client';
@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.page.html',
  styleUrls: ['./newcontact.page.scss'],
})
export class NewcontactPage  {

  idCl : number;
   form: FormGroup;
  clientes:any = [];
  
  cont: Contacts = new Contacto();


  
  constructor(private contactSrv: ContactsService,
     private fb: FormBuilder, 
     private router: Router,
      private clientSvr:ClientsService, 
      private aRoute: ActivatedRoute,
      private contactSvr: ContactsService) {

        
        
        this.idCl= Number(aRoute.snapshot.paramMap.get('id'));
       this.getClientsbyId(this.idCl);
       console.log(this.clientes);
        

    this.form = this.fb.group({
    id: [''],
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      correo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      telefono: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      
    })

    
   }
   getClientsbyId(idCl: number){
    this.clientSvr.getClientById(this.idCl).subscribe((data:Client) => {
      this.clientes = data;
      console.log(this.clientes);
    } );
  }

    getContactByID(id: number){

      this.contactSvr.getContactsById(id).subscribe((data:Contacts) => {
        this.form.patchValue(data);
        this.form.patchValue({
         id: data.id,
          nombre: data.nombre,
          apellido: data.apellido,
          correo: data.correo,
          telefono: data.telefono
         
        })
      } );
    }
    

 newContact(){
    this.cont.nombre = this.form.value.nombre;
    this.cont.apellido = this.form.value.apellido;
    this.cont.telefono = this.form.value.telefono;
    this.cont.correo = this.form.value.correo;
    this.cont.cliente_id = this.idCl;
    

   if(this.form.valid){
    console.log(this.cont);
  
   let data = this.cont;
    this.contactSrv.createContacts(data).subscribe(
      (data) => {

        alert("Contacto creado");
        console.log(data);
      },
    );
   
        this.router.navigate(["viewcontact"]);
      }
    
    
    else{ 
      alert("Llene todos los campos");
    }
 
}

}

