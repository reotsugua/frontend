import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { CalcButtons } from './calculator/calc.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CalcButtons
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
