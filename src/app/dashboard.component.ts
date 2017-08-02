import { Component } from '@angular/core';
import {FILES} from './files';
import {DownloadComponent} from './download.component';


 
 @Component({
    selector: 'dashboard',
    templateUrl: './database.component.html',
    styleUrls: ['./app.component.css']
 })

 export class DashboardComponent {
     files=FILES;
    selectedFile: File;
    
     onSelect(file: File): void {
        this.selectedFile = file;
    }
     
 }