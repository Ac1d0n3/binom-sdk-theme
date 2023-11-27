import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'bn-bn-theme-bg-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bn-theme-bg-image.component.html',
  styleUrls:[ './bn-theme-bg-image.component.css', '../bn-theme-background.component.css']
})
export class BnThemeBgImageComponent  {

  private  _color1: string = '#424242';
  get color1():string{ return this._color1}
  @Input() set color1(val:string){
    this._color1 = val;
    this.setStyle();
  }
  
  private  _color2: string = '#090A0F';
  get color2():string{ return this._color2}
  @Input() set color2(val:string){
    this._color2 = val;
    this.setStyle();
  }

  @Input() image:string = '';
  @Input() opacity: number = 0.5;

  style:string = '';
  bgStyle: string = ' background-image: url(assets/theme/'+this.image+');  opacity:'+this.opacity+';'
  constructor() { }

  ngOnInit(): void {
    this.setStyle();
    this.bgStyle = ' background-image: url(assets/theme/'+this.image+');  opacity:'+this.opacity+';'
  }

  setStyle(){
    this.style= 'background:radial-gradient(ellipse at bottom, '+ this.color1 +' 0%, '+ this.color2 +' 100%);z-index:-100;'
  }

}
