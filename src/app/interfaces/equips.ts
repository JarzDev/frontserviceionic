export interface Equips  {
    id?: number;
  marca?: string;
    modelo: string;
    serial: string;
    contador: string;
    contacto_id?: number;
   
}

export class Equipo {

  id?: number;
  marca!: string; 
    modelo!: string 
    serial!: string ;
    contador!: string ;
    contacto_id?: number;
    

}
