import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import { BnThemeSwitchMenuComponent } from '@binom/sdk-theme/theme-switch-menu';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,BnThemeSwitchMenuComponent, RouterModule, MatToolbarModule, TranslateModule, MatSidenavModule, MatButtonModule, MatExpansionModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test';
  constructor(private translate:TranslateService){
    this.translate.addLangs(['en-US', 'de-DE']);
    this.translate.setDefaultLang( 'de-DE' );
    this.data.sort((a:any, b:any) => a.title.localeCompare(b.title));
    this.data.forEach((item:any) => {
      item.data.sort();
    });
  }

  data = [
    {
      title: 'select-icon-trigger',
      data: ['select-icon-trigger']
    },
  ]

 
  
  
}
