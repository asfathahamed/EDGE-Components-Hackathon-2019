import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent {

private themeWrapper = document.querySelector('body');

  onSubmit(form) {
    this.global(form.value);
  }

  global(stylesheet) {
    console.log(stylesheet);
    
    // Theme Styles
    if (stylesheet.globalThemeColor) {
      this.themeWrapper.style.setProperty('--themeColor', stylesheet.globalThemeColor);
    }
    
    if (stylesheet.globalThemeTextAlignment) {
      this.themeWrapper.style.setProperty('--themeTextAlignment', stylesheet.globalThemeTextAlignment);
    }
    if (stylesheet.globalThemeFontStyle) {
      this.themeWrapper.style.setProperty('--themeFontStyle', stylesheet.globalThemeFontStyle);
    }
   
    if (stylesheet.globalThemeFontFamily) {
      this.themeWrapper.style.setProperty('--themeFontFamily', stylesheet.globalThemeFontFamily);
    }

  }

}