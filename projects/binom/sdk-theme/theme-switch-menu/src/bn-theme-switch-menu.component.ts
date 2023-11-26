import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { BnThemeSwitchComponent } from '@binom/sdk-theme/theme-switch';
import { MatTooltipModule } from '@angular/material/tooltip'
import { TranslateModule } from '@ngx-translate/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
@Component({
  selector: 'bn-theme-switch-menu',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatButtonModule, BnThemeSwitchComponent, MatTooltipModule, TranslateModule],
  templateUrl: './bn-theme-switch-menu.component.html',
  styleUrl: './bn-theme-switch-menu.component.css'
})
export class BnThemeSwitchMenuComponent {
  @HostBinding('class.bn-theme-switch-menu') addClass: boolean = true;
  private  _enableToolTips:boolean = false;
  get enableToolTips(): boolean{ return this._enableToolTips; }
  @Input() set enableToolTips(val: BooleanInput) { this._enableToolTips = coerceBooleanProperty(val); }
}


