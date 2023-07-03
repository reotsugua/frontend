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
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        const numericId = id ? parseInt(id, 10) : null; // ou Number(id)

        if (numericId !== null) {
            this.courseService.retrieveById(numericId).subscribe({
            next: course => this.course = course,
            error: err => console.log('Error', err)
            });
        } else {
            console.log('Invalid ID');
        }


        // const courseIdString = this.activatedRoute.snapshot.paramMap.get('id');
        //     if (courseIdString) {
        //      const courseId = parseInt(courseIdString, 10); // Converte a string em um número inteiro
        //      this.courseService.retrieveById(courseId).subscribe({
        //         next: course => this.course = course,
        //         error: err => console.log('Error', err)
        //         });     
                               
        //     }





        // this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
        //     next: course => this.course = course,
        //     error: err => console.log('Error', err)
        // });

            

        // const courseIdString = this.activatedRoute.snapshot.paramMap.get('id');
        // if (courseIdString) {
        //     const courseId = parseInt(courseIdString, 10); // Converte a string em um número inteiro
        //     const retrievedCourse = this.courseService.retrieveById(courseId);
        //     if (retrievedCourse) {
        //         this.course = retrievedCourse;
        //     }
        // }
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