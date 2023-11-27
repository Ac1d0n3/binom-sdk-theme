import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BnThemeService } from '@binom/sdk-theme/core';

import { BnRouterDataAndTitleService, BnRouterInfo } from '@binom/sdk-core/router';
import { BnThemeData } from '@binom/sdk-theme/core';
import { BnThemeBgCssClassComponent } from './bn-theme-bg-css-class/bn-theme-bg-css-class.component';
import { BnThemeBgStarsComponent } from './bn-theme-bg-stars/bn-theme-bg-stars.component';
import { BnThemeBgWavesComponent } from './bn-theme-bg-waves/bn-theme-bg-waves.component';
import { BnThemeBgImageComponent } from './bn-theme-bg-image/bn-theme-bg-image.component';

@Component({
  selector: 'bn-theme-background',
  standalone: true,
  imports: [CommonModule, BnThemeBgCssClassComponent, BnThemeBgStarsComponent, BnThemeBgWavesComponent, BnThemeBgImageComponent],
  templateUrl: './bn-theme-background.component.html',
  styleUrl: './bn-theme-background.component.css'
})
export class BnThemeBackgroundComponent implements OnInit, OnDestroy {

  constructor(
    private bnThemeService: BnThemeService,
    private bnRouterData: BnRouterDataAndTitleService
  ) { }

  darkMode:boolean = false;
  themeVars:any = {};

  colorlight: string = 'rgba(221, 219, 219, 1)'
  colorDark: string = '#3d3d3d'

  colorlight2: string = 'rgba(221, 219, 219, 1)'
  colorDark2: string = '#3d3d3d'

  color:string = 'rgba(221, 219, 219, 1)';

  color1:string = 'rgba(221, 219, 219, 1)';
  color2:string = 'rgba(221, 219, 219, 1)';

  private sub!: Subscription;
  curVals:any = {};
  useBg:string = '';

  bgClass:string = '';

  ngOnInit(): void {

    this.sub = this.bnThemeService.themeVars$.pipe(
      switchMap((vars: BnThemeData) => {
        this.themeVars = vars;
        
       
        return this.bnRouterData.routerData$;
      })
    ).subscribe(this.processRouterData.bind(this));
  }

  processRouterData(data: BnRouterInfo): void {
   this.curVals = {...this.themeVars.background.default};
   this.useBg = this.curVals.type;
    if (data.activeRoute) {
      let rVars = this.themeVars.background.onRoute
      if (rVars) {
        for (let i = 0; i < rVars.length; i++) {
          if (rVars[i].route === data.activeRoute.substring(0, rVars[i].route.length)) {
           
            this.curVals = rVars[i].values;
            if (rVars[i].forAllChilds === true) break;
          }
        }
      }
      
      if (!this.bnThemeService.data.themeBackground) this.curVals = {type: ''};
      this.useBg = this.curVals.type;
      if (this.themeVars.darkMode) {
        this.curVals.colorDark ? this.color = this.curVals.colorDark : this.color = this.colorDark;
        this.curVals.colorDark2 ? this.color2 = this.curVals.colorDark2 : this.color2 = this.colorDark2;
      } else {
        this.curVals.colorLight ? this.color = this.curVals.colorLight : this.color = this.colorlight;
        this.curVals.colorLight2 ? this.color2 = this.curVals.colorLight2 : this.color2 = this.colorlight2;
      }
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    
  }
}

