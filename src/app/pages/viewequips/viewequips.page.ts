import { Component } from '@angular/core';
import { EquipsService } from 'src/app/services/equips.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthFireService } from 'src/app/services/auth-fire.service';

@Component({
  selector: 'app-viewequips',
  templateUrl: './viewequips.page.html',
  styleUrls: ['./viewequips.page.scss'],
})
export class ViewequipsPage  {

  equipos : any[] = [];

  constructor(private equipSvr : EquipsService, private authSrv: AuthFireService, private router: Router) {
    if(localStorage.getItem('token') == null){
      this.router.navigate(['/intro']);
    }
    
    this.equipSvr.getAllEquips().subscribe( (data) => {
      this.equipos = data;
      console.log(this.equipos);
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
