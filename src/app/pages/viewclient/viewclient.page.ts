import { Component} from '@angular/core';
import { Client } from 'src/app/interfaces/client';
import { ClientsService } from 'src/app/services/clients.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthFireService } from 'src/app/services/auth-fire.service';

@Component({
  selector: 'app-viewclient',
  templateUrl: './viewclient.page.html',
  styleUrls: ['./viewclient.page.scss'],
})
export class ViewclientPage  {

  cliente:Client[] = [];

  constructor( private clientService: ClientsService, private authSrv: AuthFireService, private router: Router) {

    if(localStorage.getItem('token') == null){
      this.router.navigate(['/intro']);
    }
    
    

    this.clientService.getAllClients().subscribe( (data:Client[]) => {
      this.cliente = data;
     console.log(this.cliente);

    });
}

logOut()  {

  this.authSrv.logoutUser().then(
    res => { 
       const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
        
      })
      Toast.fire({
        icon: 'info',
        title: 'email:   logged out'
      })

      localStorage.removeItem('token');
      this.router.navigate(['/intro']);
      
    });
  }
}
