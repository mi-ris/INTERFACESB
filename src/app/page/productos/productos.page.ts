import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon
  ]
})
export class ProductosPage {

  productos = [
    {
      nombre: 'Laptop Profesional',
      descripcion: 'Alto rendimiento para trabajo y estudio',
      precio: '$1200',
      icono: 'laptop-outline',
      etiqueta: 'DESTACADO'
    },
    {
      nombre: 'Smartphone 5G',
      descripcion: 'Potencia y velocidad en tu mano',
      precio: '$850',
      icono: 'phone-portrait-outline',
      etiqueta: 'NUEVO'
    },
    {
      nombre: 'Soporte Técnico',
      descripcion: 'Mantenimiento y reparación especializada',
      precio: '$40',
      icono: 'construct-outline'
    },
    {
      nombre: 'Desarrollo Web',
      descripcion: 'Sitios modernos y optimizados',
      precio: '$300',
      icono: 'globe-outline',
      etiqueta: 'POPULAR'
    }
  ];

}
