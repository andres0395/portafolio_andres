import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { TimelineComponent } from './components/timeline/timeline.component';
import { CardComponent } from './components/card/card.component';
import { EmailComponent } from './components/email/email.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgClass,TimelineComponent,CardComponent, EmailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'portafolio_andres';
  dataImg=[
    {name:'HTML',img:'./images/html-removebg-preview.png'},
    {name:'CSS',img:'./images/css-removebg-preview.png'},
    {name:'ANGULAR',img:'./images/angular-removebg-preview.png'},
    {name:'MONGO DB',img:'./images/mongo-removebg-preview.png'},
    {name:'MYSQL',img:'./images/mysql-removebg-preview.png'},
    {name:'NODE JS',img:'./images/node-removebg-preview.png'},
    {name:'PHP',img:'./images/php-removebg-preview.png'},
    {name:'POSTGRES',img:'./images/postgres-removebg-preview.png'},
    {name:'PYTHON',img:'./images/python-removebg-preview.png'},
    {name:'JAVASCRIPT',img:'./images/javascript.png'},
    {name:'TYPESCRIPT',img:'./images/ts.png'}
  ]
  ngOnInit(): void {
    initFlowbite();
  }
  downloadPDF() {
    const pdfUrl = './images/HVandres_munoz.pdf';
    const pdfName = 'cv_andres_munoz.pdf';

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfName;
    link.target = '_blank';
    link.click();
  }
}
