import { Component } from '@angular/core';
import { ServsService } from 'src/app/services/servs.service';
import { AuthFireService } from 'src/app/services/auth-fire.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewserv',
  templateUrl: './viewserv.page.html',
  styleUrls: ['./viewserv.page.scss'],
})
export class ViewservPage  {

  servicios : any[] = [];

  constructor(private servSrv: ServsService, private authSrv: AuthFireService, private router: Router ) {

    if(localStorage.getItem('token') == null){
      this.router.navigate(['/intro']);
    }

    this.servSrv.getAllServs().subscribe( (data) => {
      this.servicios = data;
      console.log(this.servicios);
    }
    );


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
