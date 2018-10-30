import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor() {
  }

  initSettings() {
      if (localStorage.length == 0) {
          alert("Première utilisation");
          this.setOnOffSetting('nextStartSpeech', 'true', 'Activé');
  }
  }

  setOnOffSetting(name: string, value: string, caption: string) {
      localStorage.setItem(name + 'Value', value);
      localStorage.setItem(name + 'Caption', caption);
  }

  getSettingValue(name) {
      return localStorage.getItem(name + 'Value');
  }

  getSettingCaption(name) {
      return localStorage.getItem(name + 'Caption');
  }

  clearSettings() {
      localStorage.clear();
      this.initSettings();
  }
}
