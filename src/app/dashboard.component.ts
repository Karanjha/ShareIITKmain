import { Component } from '@angular/core';
import {FILES} from './files';
import {DownloadComponent} from './download.component';
import {MdTableModule} from '@angular/material';

 
 @Component({
    selector: 'dashboard',
    templateUrl: './database.component.html',
    
 })

 export class DashboardComponent {
     files=FILES;
    selectedFile: File;
    
     onSelect(file: File): void {
        this.selectedFile = file;
    }
     
 }