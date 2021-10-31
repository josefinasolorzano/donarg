import { Component, OnInit } from '@angular/core';
import { PublicacionService } from './publicacion.service';
@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.page.html',
  styleUrls: ['./publicacion.page.scss'],
})
export class PublicacionPage implements OnInit {
  public titulo: any;
  public subtitulo: any;
  public descripcion: any;
  public monto: any;
  public imagen: any;
  public datos: any = [];

  constructor(private publicacionService: PublicacionService) {}

  ngOnInit() {}

  enviarinfo() {
    this.datos.push(this.titulo);
    this.datos.push(this.subtitulo);
    this.datos.push(this.descripcion);
    this.datos.push(this.monto);
    this.datos.push(this.imagen);
    this.publicacionService.cargardatos(this.datos).subscribe((d) => {
      alert('enviado');
    });
  }
}
