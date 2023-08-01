import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Servs } from 'src/app/interfaces/servs';
import { EquipsService } from 'src/app/services/equips.service';
import { ServsService } from 'src/app/services/servs.service';

@Component({
  selector: 'app-newserv',
  templateUrl: './newserv.page.html',
  styleUrls: ['./newserv.page.scss'],
})
export class NewservPage  {

  idCt : number;
  equipos : any;
  form!: FormGroup;
  serv: any = {} as Servs;
 
   constructor(private servSvr:ServsService, private router:Router, private fb:FormBuilder, private equipSvr: EquipsService, private aRoute: ActivatedRoute   ) {
 
    this.idCt= Number(aRoute.snapshot.paramMap.get('id'));
    this.getEquipByID(this.idCt);
    
    
    this.equipos = this.equipSvr.getAllEquips();
     this.form = this.fb.group({
       name_serv: ['', [ Validators.minLength(3), Validators.maxLength(20)]],
       fecha: ['', [Validators.minLength(3), Validators.maxLength(20)]],
       descripcion: ['', [ Validators.minLength(3), Validators.maxLength(20)]],
       recomendaciones: ['', [ Validators.minLength(3), Validators.maxLength(20)]],
       partes: ['', [ Validators.minLength(3), Validators.maxLength(20)]],
       horas_serv: ['', [ Validators.minLength(3), Validators.maxLength(20)]],
       
       });
 }
  getEquipByID(idCt: number) {
    this.equipSvr.getEquipsById(this.idCt).subscribe((data) => {
      this.equipos = data;
      console.log(data);
    }
    );
  }

   
 
 createServ(){
 
   this.serv.name_serv = this.form.value.name_serv;
     this.serv.fecha = this.form.value.fecha;
     this.serv.descripcion = this.form.value.descripcion;
     this.serv.recomendaciones = this.form.value.recomendaciones;
     this.serv.partes = this.form.value.partes;
     this.serv.horas_serv = this.form.value.horas_serv;
     this.serv.equipo_id = this.idCt;
     if(this.serv.name_serv.length > 2 &&   this.serv.descripcion.length > 2 && this.serv.recomendaciones.length > 2){
       
     this.servSvr.createServs(this.serv).subscribe(
       data => {
          console.log(data);
          alert("Servicio Creado");
         
         this.router.navigate(["viewserv"]);
       }
     );}if(this.serv.name_serv.length < 2 &&   this.serv.descripcion.length < 2 && this.serv.recomendaciones.length < 2 ) {
        alert("Debe llenar todos los campos");
          
     }
 }
 
 
 
 
 }
