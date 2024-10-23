import { Component } from '@angular/core';
import { Article } from '../../interfaces/article.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  dataArticles:Article[] = [
    {
      name:'Tuturia en angular',
      description:'enseñar angular de manera avanzada a estudiantes universitarios, estuve realizando un sistema de gestion de contratos con angular, laravel y postgres en el cual podian interactuar con los usuarios contratados y no contratados y editar el contrato generando un nuevo archivo y conservando el historial',
      image:'./images/imgs/poli0.png',
      descSub:'enseñar angular de manera avanzada a estudiantes universitarios... ver mas',
      imgs:[
        './images/imgs/poli1.png',
        './images/imgs/poli12.png',
        './images/imgs/poli3.png',
        './images/imgs/poli4.png',
        './images/imgs/poli15.png'
      ]
    },
    {
      name:'Techelit',
      description:'desarrolle una landing y un panel de administrador el cual le permitiria al cliente subir articulos relacionados con su trabajo, realizado con angular y spring boot permitiendo la carga de imagenes al servidor con postgres y debian 12, realice tambien el despliegue, en contabo.',
      image:'./images/imgs/techelit1.png',
      descSub:'desarrolle una landing y un panel de administrador el cual... ver mas',
      imgs:[
        './images/imgs/techelit1.png',
        './images/imgs/techelit12.png',
        './images/imgs/techelit13.png',
        './images/imgs/techelit14.png',
        './images/imgs/techelit15.png'
      ]
    },
    {
      name:'Gestion de empleados',
      description:'Desarrollador web con Angular, TypeScript y Node js, en este proyecto tuve que realizar un sistema de gestión de empleados en tiempo real utilizando tecnologías como web socket que permite ver cambios en tiempo real sin la necesidad de peticiones constantes al servidor, el sistema contenía logística, ventas y contabilidad , desarrollando completamente el modulo de nomina',
      image:'./images/imgs/employ1.png',
      descSub:'Desarrollador web con Angular, TypeScript y Node... ver mas',
      imgs:[
        './images/imgs/employ1.png',
        './images/imgs/employ2.png',
        './images/imgs/employ13.png',
        './images/imgs/employ14.png',
        './images/imgs/employ15.png'
      ]
    },
  ];
  articleSelectCache!:Article;
  showNoModal:boolean = true;
  SelectArticle(obj:Article){
    this.articleSelectCache = obj;
    this.showNoModal = false;
  }
  closeModal(){
    this.showNoModal = true;
  }
}
