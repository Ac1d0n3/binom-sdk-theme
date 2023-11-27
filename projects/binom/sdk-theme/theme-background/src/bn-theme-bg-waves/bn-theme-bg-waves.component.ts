import { Component, Input  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bn-bn-theme-bg-waves',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bn-theme-bg-waves.component.html',
  styleUrls: ['./bn-theme-bg-waves.component.css', '../bn-theme-background.component.css']
})
export class BnThemeBgWavesComponent {
  wavecolor1:string = '';
  wavecolor2:string = '';
  wavecolor3:string = '';

  base:string = '';
  
  @Input() color1:string ="#222823";

  @Input('color2') set baseColor(value:string){
    if(value=='' || value === undefined) value = '#c7db51'
    this.base = value;

    this.wavecolor1 = this.base + "90";
    this.wavecolor2 = this.base + "80";
    this.wavecolor3 = this.base + "70";
  }
}