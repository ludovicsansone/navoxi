import { Component, OnInit } from '@angular/core';
import { SettingsService } from './common-services/settings.service';

@Component({
  selector: 'nvx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 

    constructor(
    private settingsService: SettingsService) { }

    ngOnInit() {
        this.settingsService.initSettings();
    }
}
