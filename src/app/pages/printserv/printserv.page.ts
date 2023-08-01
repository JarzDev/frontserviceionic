import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServsService } from 'src/app/services/servs.service';
import Swal from 'sweetalert2';

import { AuthFireService } from 'src/app/services/auth-fire.service';

@Component({
  selector: 'app-printserv',
  templateUrl: './printserv.page.html',
  styleUrls: ['./printserv.page.scss'],
})
export class PrintservPage  {
  servicio: any={  }

  constructor( private activeRouter: ActivatedRoute, private router:Router, private servSvr: ServsService, private authSrv: AuthFireService) {
    let id = this.activeRouter.snapshot.params['id'];
    this.servSvr.getServsById(id).subscribe(
      (data) => {
      console.log(data);
      this.servicio = data;
    }
    );
    
   }
   imprimir(){
    window.print();
    this.router.navigate(["viewserv"]);
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