import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit{

  courses : string[];

  constructor() {
    this.courses = ["Cours Java", "Cours Angular", "Cours Flutter"]
  }

  ngOnInit(): void {
      
  }
}
