import { Component, OnInit, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'bn-bn-theme-bg-stars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bn-theme-bg-stars.component.html',
  styleUrls: ['./bn-theme-bg-stars.component.css', '../bn-theme-background.component.css']
})
export class BnThemeBgStarsComponent implements OnInit {

  stars: { x: number; y: number, r:string, opacity:string  }[] = [];
  starsAnimated : { x: number; y: number, delay:number, r:string,opacity:string, duration:string  }[] = [];
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
  style:string = '';
  constructor() {
    const numStars = 400;
    const numStars2 = 3000;

    for (let i = 0; i < numStars; i++) {
      const x = Math.floor(Math.random() * 4000);
      const y = Math.floor(Math.random() * 3800);
      const delay = Math.floor(Math.random() * 1000);
      const duration = (Math.random() * 6 + 2).toFixed(2)+'s'; 
      const r = (Math.random() * 0.05 + 0.02).toFixed(2); 
      const opacity = `0;${(Math.random() * 0.9 + 0.1).toFixed(2)};0`; 

      this.starsAnimated.push({ x, y, delay, r, opacity, duration });
    }

    for (let i = 0; i < numStars2; i++) {
      const x = Math.floor(Math.random() * 4000);
      const y = Math.floor(Math.random() * 3800);

      const r = (Math.random() * 0.02 + 0.005).toFixed(2); 
      const opacity = `${(Math.random() * 0.7 + 0.2).toFixed(2)}`; 

      this.stars.push({ x, y, r, opacity });
    }

   }

  ngOnInit(): void {
    this.setStyle();
  }

  setStyle(){
    this.style= 'background:radial-gradient(ellipse at bottom, '+ this.color1 +' 0%, '+ this.color2 +' 100%);z-index:-100;'
  }

}