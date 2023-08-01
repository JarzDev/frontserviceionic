import { Component} from '@angular/core';
import { Contacts } from 'src/app/interfaces/contacts';
import { ContactsService } from 'src/app/services/contacts.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthFireService } from 'src/app/services/auth-fire.service';

@Component({
  selector: 'app-viewcontact',
  templateUrl: './viewcontact.page.html',
  styleUrls: ['./viewcontact.page.scss'],
})
export class ViewcontactPage {

  contacto : any[] = [];

  constructor(private contactSrv: ContactsService, private authSrv: AuthFireService, private router: Router) {

    if(localStorage.getItem('token') == null){
      this.router.navigate(['/intro']);
    }

    this.contactSrv.getAllContacts().subscribe( (data:Contacts[]) => {
      this.contacto = data;
     console.log(this.contacto);

    }
    );}

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
