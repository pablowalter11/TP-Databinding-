import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos = [
    { id: 1, nombre: 'Producto A', precio: 100, descuento: false },
    { id: 2, nombre: 'Producto B', precio: 200, descuento: false },
    { id: 3, nombre: 'Producto C', precio: 300, descuento: false }
  ];

  agregarProducto(nombre:string,precio:number,descuento:boolean) {
    const nuevo = {
      id:this.productos.length+1,
      nombre:nombre,
      precio:precio,
      descuento:descuento
    };

    this.productos.push(nuevo);
  }

  eliminarPorId(id:number) {
    this.productos = this.productos.filter(p => p.id != id);
  }

}
