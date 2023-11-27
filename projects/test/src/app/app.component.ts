import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'
import { BnThemeService, themes } from '@binom/sdk-theme/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import { BnThemeSwitchMenuComponent } from '@binom/sdk-theme/theme-switch-menu';
import { BnTranslateSwitchMenuComponent } from '@binom/sdk-core/translate';
import {BnHelpService, BnHelpSwitchMenuComponent } from '@binom/sdk-core/help'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,BnThemeSwitchMenuComponent, RouterModule, MatToolbarModule, TranslateModule, 
    MatSidenavModule, MatButtonModule, MatExpansionModule,BnHelpSwitchMenuComponent,BnTranslateSwitchMenuComponent],
  providers:[BnThemeService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test';
  themes:any = themes;
  constructor(private translate:TranslateService,  private bnThemeSvc: BnThemeService){
    this.translate.addLangs(['en-US', 'de-DE']);
    this.translate.setDefaultLang( 'en-US' );
    this.data.sort((a:any, b:any) => a.title.localeCompare(b.title));
    this.data.forEach((item:any) => {
      item.data.sort();
    });
    this.bnThemeSvc.registerThemes(this.themes);
  }

  data = [
    {
      title: 'select-icon-trigger',
      data: ['select-icon-trigger']
    },
  ]

 
  
  
}
