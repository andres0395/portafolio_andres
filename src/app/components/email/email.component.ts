import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-email',
  standalone:true,
  templateUrl: './email.component.html',
  imports:[ReactiveFormsModule]
})
export class EmailComponent {
private formbuilder = inject(FormBuilder);

  formContacts = this.formbuilder.nonNullable.group({
    name:['', Validators.required],
    message:['', Validators.required],
    email:['', Validators.required],
    subject:['', Validators.required]
  });
  sendEmail(e: Event) {
    e.preventDefault();
    if(this.formContacts.invalid){
      Swal.fire({
        icon:'error',
        title:'Tiene Campos Vacios'
      });
    }
    else{
      emailjs.sendForm('service_nmxq7os', 'template_6cw3les', e.target as HTMLFormElement, 'U9VuUhIdHqj066TM4')
      .then((result: EmailJSResponseStatus) => {
        this.formContacts.reset();
        Swal.fire({
          icon:'success',
          title:'Enviado Correctamente',
          text:'Me pondre en contacto lo mas pronto posible'
        });
      }, (error) => {
        console.log(error.text);
      });
    }
  }
}
