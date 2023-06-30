import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    template: '<h2>Course Id = {{courseId}}</h2>'
}) 
export class CourseInfoComponent implements OnInit{
    
    courseId!: number;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void{
        const courseIdString = this.activatedRoute.snapshot.paramMap.get('id');
        if (courseIdString) {
            this.courseId = parseInt(courseIdString, 10); // Converte a string em um número inteiro
 
        }
    }
}