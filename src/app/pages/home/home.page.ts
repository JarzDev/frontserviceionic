import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthMockService } from 'src/app/services/auth-mock.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage  {

  token = '';
   email = localStorage.getItem('email');
  formFb: FormGroup;
  constructor( private router: Router, private authSrv: AuthMockService ) {
    this.formFb = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
 
  }
  
  login ()  {
    this.authSrv.loginUser(this.formFb.value).then(
      res => {
       
        
        this.token = res.user.accessToken;
        this.email = res.user.email;
        
        localStorage.setItem('token', this.token);
        setTimeout(() => {
          this.router.navigate(['/viewclient']);
        }, 2000);

        const Toast = Swal.mixin({
          toast: true,
          position: 'center',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
          
        })
        Toast.fire({
          icon: 'success',
          title: 'email: ' + this.email + ' logged'
        })
      } 

    ).catch(
      err => {
        console.log(err);
        alert(err.message);
        }
        )}

}
