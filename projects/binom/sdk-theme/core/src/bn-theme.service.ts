import { ApplicationRef, Inject, Injectable } from '@angular/core';
import { BnThemeConfig } from './theme-config.model';
import { DOCUMENT } from '@angular/common';
import { BnThemeData } from './theme-data.model';
import { BnThemes } from './themes.model';
import { BehaviorSubject } from 'rxjs';
import { BnThemeCustomStyle } from './bn-theme-custom-style';

@Injectable({
  providedIn: 'root'
})
export class BnThemeService {

  //private renderer: Renderer2;
  constructor (
    //private rendererFactory: RendererFactory2,
    private ref: ApplicationRef, 
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.registerDarkModeAutoSwitcher();
    this.getSettingsFromLocal();
    this.bodyChangeTheme(this.data.activeTheme)
  }

  customStyles:BnThemeCustomStyle[] = [];

  config: BnThemeConfig = {
    autoDarkMode: true,
    alwaysDark: false,
    useSystem: true,
    activeTheme: 'binom-legacy',
    darkMode: false,
    darkFrom: '21:00',
    darkTo: '11:30',
    allowSave: true,
    darkTag: '-dark',
    addThemeToBody: true,
    themeBackground: true
  }

  private setDefaults(){
    this.data = {
      autoDarkMode: this.config.autoDarkMode,
      alwaysDark: this.config.alwaysDark,
      useSystem: this.config.useSystem,
      activeTheme: this.config.activeTheme,
      darkMode: this.config.darkMode,
      darkFrom: this.config.darkFrom,
      darkTo: this.config.darkTo,
      allowSave: this.config.allowSave,
      themeBackground: this.config.themeBackground,
      saveSettings: false,
    };
    return this.data;

  }

  public addCustomStyle(style:BnThemeCustomStyle){
    if(this.customStyles.findIndex((obj:BnThemeCustomStyle) => obj.id === style.id ) === -1)
      this.customStyles.push(style);
  }

  public data: BnThemeData = this.setDefaults();

  private currentTheme: string = '';
  private autoDarkRegistered: boolean = false;
  private darkFromToRegistered: boolean = false;

  public bnThemes:BnThemes[] = [];

  private _bnTheme = new BehaviorSubject<BnThemeData>(this.data);
  public bnThemeData$ = this._bnTheme.asObservable();

  private _darkMode = new BehaviorSubject<boolean>(false);
  darkMode$ = this._darkMode.asObservable();

  private _themeVars = new BehaviorSubject<any>({});
  themeVars$ = this._themeVars.asObservable();

  private _activeTheme = new BehaviorSubject<string>('');
  activeTheme$ = this._activeTheme.asObservable();


  public getData (){
    return this._bnTheme.value;
  }


  public registerThemes(themes:BnThemes[]){
    this.bnThemes = themes;
    this.setThemeVars();
  }

  public setThemeSettings(data:BnThemeData){
    this.data = data ;
    this.updateData();
  }

  public setThemeConfig(config:BnThemeConfig){
    if(this.config !== config)
    this.config = { ...this.config, ...config }
  }

  public bodyChangeTheme(theme:string){
    if(this.config.addThemeToBody){
      this.__removeThemeFromBody();
      this.data.activeTheme = theme;
      this.__addThemeToBody();
      this.updateData();
    } else {
      this.data.activeTheme = theme;
      this.updateData();
    }
  }

  public bodyChangeDark(){
    if(this.config.addThemeToBody){
      this.__removeThemeFromBody();
      this.updateData();
      this.__addThemeToBody();
    }
  }

  public getSettingsFromLocal() {
    let getSettings = localStorage.getItem('bnThemeSettings');
    if(getSettings){
        this.data = JSON.parse(getSettings);
    }
  }

  public setSettingsToLocal() {
    if(this.config.allowSave && this.data.saveSettings){
      localStorage.setItem('bnThemeSettings', JSON.stringify(this.data));
    } else {
      localStorage.removeItem('bnThemeSettings');
    }
  }

  public disableBackground(value:boolean){
    let index = this.bnThemes.findIndex((obj:BnThemes) => obj.styleName == this.data.activeTheme);
    let themeVars = this.bnThemes[index].themeVars;
    themeVars.disableBackgroundEffect = value;
    this._themeVars.next(themeVars)
  }

  public changeBackground(value:string,reset:boolean = false){
    let index = this.bnThemes.findIndex((obj:BnThemes) => obj.styleName == this.data.activeTheme);
    let themeVars = this.bnThemes[index].themeVars;
    if(themeVars.defaultBackground === undefined || themeVars.defaultBackground === '')
      themeVars.defaultBackground = themeVars.setBackground;
    themeVars.setBackground = value;
    if(reset) {
      themeVars.setBackground = themeVars.defaultBackground;
      themeVars.defaultBackground = '';
    }
    this._themeVars.next(themeVars)
  }


  private updateData(){
    this._bnTheme.next(this.data);
    this.setSettingsToLocal();
    this.__updateDarkMode();
    this.setThemeVars();
    this.__updateActiveTheme();
    this.__addCustomeStyles();
  }

  private __addCustomeStyles(){
    this.customStyles.forEach((style) => {
      this.__addCustomeStyle (style)
    });
  }

  private __addCustomeStyle (customStyle:BnThemeCustomStyle) {
    const head = this.document.getElementsByTagName('head')[0];
    let themeLink = this.document.getElementById(
      customStyle.id
    ) as HTMLLinkElement;

    let styleName = customStyle.darkStyleUrl
    if(!this.data.darkMode) styleName = customStyle.lightStyleUrl
    if (themeLink) {
      themeLink.href = styleName;
    } else {
      const style = this.document.createElement('link');
      style.id =  customStyle.id;
      style.rel = 'stylesheet';
      style.href = `${styleName}`;
      head.appendChild(style);
    }
  }


  private setThemeVars(){
    let index = this.bnThemes.findIndex((obj:BnThemes) => obj.styleName == this.data.activeTheme);
    if(index != -1){
      let themeVars = this.bnThemes[index].themeVars;
      themeVars.darkMode = this.data.darkMode;
      this._themeVars.next(themeVars)
    }

  }

  private __updateActiveTheme (){
    this._activeTheme.next(this.data.activeTheme);
  }

  private __updateDarkMode (){
    this._darkMode.next(this.data.darkMode);
  }

  private __getBody(){
    return document.getElementsByTagName('body')[0];
  }

  private __darkTag(){
    if(this.data.alwaysDark && !this.data.autoDarkMode) this.data.darkMode = true;
    return this.data.darkMode == true? this.config.darkTag  : '';
  }

  private __addThemeToBody(){

    this.currentTheme = this.data.activeTheme + this.__darkTag()
   
    this.__getBody().classList.add(this.currentTheme);
    if(this.data.darkMode) this.__getBody().classList.add('dark');

  }

  private __removeThemeFromBody(){
    if(this.currentTheme){
      this.__getBody().classList.remove(this.currentTheme);
      this.__getBody().classList.remove('dark');
    }
  }

  private __isValid(date:any, h1:number, m1:number, h2:number, m2:number) {
    var h = date.getHours();
    var m = date.getMinutes();
    return (h1 > h || h1 == h && m1 >= m) && (h < h2 || h == h2 && m <= m2);
  }

  private __updateAppView (){
    if(!this.config.addThemeToBody)
      this.ref.tick();
    else this.bodyChangeDark()
  }

  private registerDarkModeAutoSwitcher(){
    this.__registerAutoDark();
    this.__registerAutoDarkFromTo()
  }

  private __updateDataAndView(){
    this.updateData();
    this.setThemeVars();
    this.__updateAppView();
  }

  private __registerAutoDark(){
    if(!this.autoDarkRegistered){
      this.autoDarkRegistered = true;
      const darkModeOn = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      if(darkModeOn && this.data.autoDarkMode){
        this.data.darkMode = true
        this.__updateDarkMode ()
      }
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change',(e:any) => {
        if(this.data.autoDarkMode){
          const turnOn = e.matches;
          if(turnOn !== undefined){
            this.data.darkMode = turnOn ? true : false;
            this.__updateDarkMode ()
            this.__updateDataAndView();
          }

        }
      });
    }
  }

  private __changeToDarkOnTime(){
    let valid = this.__isValid(new Date(),
      parseInt(this.data.darkFrom.substring(0, 2)), parseInt(this.data.darkFrom.substring(3)),
      parseInt(this.data.darkTo.substring(0, 2)),parseInt(this.data.darkTo.substring(3)));
    this.data.darkMode = valid;
    this.bodyChangeDark();
  }

  private __registerAutoDarkFromTo(){
    if(this.data.autoDarkMode && !this.data.useSystem && !this.darkFromToRegistered){
      this.__changeToDarkOnTime();
      this.darkFromToRegistered = true;
      setTimeout(()=>{ this.__changeToDarkOnTime() }, 3000);
    }
  }

}
