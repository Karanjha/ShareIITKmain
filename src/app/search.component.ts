import { Component, Output } from '@angular/core';
import {CoursesService} from './courses.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {searchValidators} from './searchValidators';
import {Filetypes} from './filetypes';
import {SearchService} from './search.service';
import {MdInputModule} from '@angular/material';
import {MdSelectModule} from '@angular/material';

@Component({
    selector:'search',
    templateUrl:'./search.component.html',
    styles:[`
    `]
})

export class SearchComponent {
    
    searchForm: FormGroup;
    courses = [];
    filetypes: string[] = Filetypes;
    baseurl: string = 'http://localhost:8082/resources/search';
    results = [];
    success = false;

    constructor (private coursesService: CoursesService, fb: FormBuilder, private searchservice: SearchService) {
        
        this.searchForm = fb.group({
            filename: ['',Validators.required],
            course:['Select Course',Validators.compose([Validators.required,searchValidators.invalidCourse])],
            filetype:['Select Type',Validators.compose([Validators.required,searchValidators.invalidType])]
        })
        
        coursesService.getCourses().subscribe(courses => {this.courses = courses});
    }

    onSearch() {
        this.searchservice._searchurl = this.baseurl + this.searchForm.controls['filename'].value;
        this.searchservice.getSearchResult()
            .subscribe(
                res => {this.results = res.data;},
                null,
                () => {
                    this.success = true;
                    console.log(this.results);
                });
            };            
}