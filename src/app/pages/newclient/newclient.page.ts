import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/interfaces/client';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-newclient',
  templateUrl: './newclient.page.html',
  styleUrls: ['./newclient.page.scss'],
})
export class NewclientPage  {


   
   rutValido = "^[0-9]+[-|‐]{1}[0-9kK]{1}$";
   
   form : FormGroup;
   constructor(private clientSrv: ClientsService,
               private fb: FormBuilder,
               private router: Router,
               private aRoute: ActivatedRoute) {
                   this.form = this.fb.group({
                   empresa: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
                   rut: ['',[Validators.required, Validators.pattern(this.rutValido)]],
                   direccion: ['',[Validators.required, Validators.maxLength(20)]],
                   
 })
               }
     
  createClient(){
    
     if(this.form.valid){
         const client : Client = this.form.value;
         this.clientSrv.createClient(client).subscribe(() => {
          alert('Cliente creado con exito');
           this.router.navigate(['/viewclient/'])
         });
       }else{
        alert('Formulario invalido');
       }
    
   }

}

