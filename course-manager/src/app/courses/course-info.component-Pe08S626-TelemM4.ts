import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CouseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
}) 
export class CourseInfoComponent implements OnInit{

    course!: Course;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CouseService) {}

    ngOnInit(): void {
        const courseIdString = this.activatedRoute.snapshot.paramMap.get('id');
        if (courseIdString) {
            const courseId = parseInt(courseIdString, 10); // Converte a string em um número inteiro
            const retrievedCourse = this.courseService.retrieveById(courseId);
            if (retrievedCourse) {
                this.course = retrievedCourse;
            }
        }
    }

    save(): void {
        this.courseService.save(this.course);
    }
    
    // course: Course | undefined;

    // constructor(private activatedRoute: ActivatedRoute, private courseService: CouseService) {}

    // ngOnInit(): void {
    //     const courseIdString = this.activatedRoute.snapshot.paramMap.get('id');
    //     if (courseIdString) {
    //         const courseId = parseInt(courseIdString, 10); // Converte a string em um número inteiro
    //         this.course = this.courseService.retrieveById(courseId);
    //     }
    // }
}