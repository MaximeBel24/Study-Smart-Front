import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course } from '../model/course.model';
import { Category } from '../model/category.model';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrl: './search-by-name.component.css'
})
export class SearchByNameComponent implements OnInit{

  courses! : Course[];
  IdCategory! : number;
  categories! : Category[];
  titleCourse! : string;
  searchTerm! : string;
  allCourses! : Course[];

  constructor(
    private courseService : CourseService
  ){}

  ngOnInit(): void {
    this.courseService.listCourses().subscribe(crs => {
      console.log(crs)
      this.allCourses = crs
    })
  }

  onKeyUp(filterText : string){
    this.courses = this.allCourses.filter(item => item.title.toLowerCase().includes(filterText))
  }

  searchCourses(){
    this.courseService.searchByTitle(this.titleCourse).subscribe(crs => {
      this.courses = crs;
      // console.log(crs);
    })
  }
}
