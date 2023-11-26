import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { BnThemes } from '@binom/sdk-theme/core';
import { BnThemeData } from '@binom/sdk-theme/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BnThemeService } from '@binom/sdk-theme/core';
import { MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule} from '@angular/material/slide-toggle'
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'bn-theme-switch',
  standalone: true,
  imports: [CommonModule, MatRadioModule, MatFormFieldModule,MatCheckboxModule,MatInputModule,MatSlideToggleModule, FormsModule,TranslateModule],
  templateUrl: './bn-theme-switch.component.html',
  styleUrl: './bn-theme-switch.component.css',
  encapsulation: ViewEncapsulation.None
})
export class BnThemeSwitchComponent implements OnInit, OnDestroy {
  private sub!: Subscription;
  themes: BnThemes[] = [];

  data: BnThemeData = this.bnThemeService.getData();

  darkTag: string = ''
  saveSettings: boolean = false;

  private  _enableToolTips:boolean = false;
  get enableToolTips(): boolean{ return this._enableToolTips; }
  @Input() set enableToolTips(val: BooleanInput) { this._enableToolTips = coerceBooleanProperty(val); }

  constructor(
    private translate: TranslateService,
    private bnThemeService: BnThemeService
  ) { }

  ngOnInit(): void {

    this.sub = this.bnThemeService.bnThemeData$.subscribe((data:BnThemeData) => {
      if(JSON.stringify(data) !== JSON.stringify(this.data))
      this.data = data
    });

    this.themes =  this.bnThemeService.bnThemes

  }

  changeTheme(theme:string){
    this.bnThemeService.bodyChangeTheme(theme)
  }

  changeDark(){
    this.bnThemeService.bodyChangeDark()
  }

  changeSettings(){
    this.bnThemeService.setThemeSettings(this.data)
  }
  ngOnDestroy() { if(this.sub) this.sub.unsubscribe(); }

}
