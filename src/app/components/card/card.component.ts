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
        'https://i.postimg.cc/y8GNyj6S/poli1.png',
        'https://i.postimg.cc/tTQCLgxq/poli12.png',
        'https://i.postimg.cc/52y0zTJV/poli3.png',
        'https://i.postimg.cc/jjJSgfC3/poli4.png',
        'https://i.postimg.cc/0QY2xqYp/poli15.png'
      ]
    },
    {
      name:'Techelit',
      description:'desarrolle una landing y un panel de administrador el cual le permitiria al cliente subir articulos relacionados con su trabajo, realizado con angular y spring boot permitiendo la carga de imagenes al servidor con postgres y debian 12, realice tambien el despliegue, en contabo.',
      image:'./images/imgs/techelit1.png',
      descSub:'desarrolle una landing y un panel de administrador el cual... ver mas',
      imgs:[
        'https://i.postimg.cc/3N3rxb1z/techelit1.png',
        'https://i.postimg.cc/ZYLKM4Km/techelit12.png',
        'https://i.postimg.cc/j2vxwQk2/techelit13.png',
        'https://i.postimg.cc/X777MmpC/techelit14.png',
        'https://i.postimg.cc/bNCYqgtF/techelit15.png'
      ]
    },
    {
      name:'Gestion de empleados',
      description:'Desarrollador web con Angular, TypeScript y Node js, en este proyecto tuve que realizar un sistema de gestión de empleados en tiempo real utilizando tecnologías como web socket que permite ver cambios en tiempo real sin la necesidad de peticiones constantes al servidor, el sistema contenía logística, ventas y contabilidad , desarrollando completamente el modulo de nomina',
      image:'./images/imgs/employ1.png',
      descSub:'Desarrollador web con Angular, TypeScript y Node... ver mas',
      imgs:[
        'https://i.postimg.cc/HW0V1bzf/employ1.png',
        'https://i.postimg.cc/Kj5z7y4Z/employ2.png',
        'https://i.postimg.cc/prvrndWG/employ13.png',
        'https://i.postimg.cc/FR31RS4k/employ14.png',
        'https://i.postimg.cc/wT63q3b3/employ15.png'
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
