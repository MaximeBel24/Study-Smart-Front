import { Component, OnInit } from '@angular/core';
import { Course } from '../../../model/course.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../../services/course.service';
import { Category } from '../../../model/category.model';
import { Image } from '../../../model/image.model';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrl: './update-produit.component.css'
})
export class UpdateProduitComponent implements OnInit{

  currentCourse = new Course();

  categories! : Category[];
  updatedCatId! : number;
  myImage! : string;

  uploadedImage!: File;
  isImageUpdated: Boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router : Router,
    private courseService: CourseService
  ) { }

  // ngOnInit(){
  //   this.courseService.listCategories().subscribe(cats => {
  //     this.categories = cats._embedded.categories;
  //     console.log(cats);
  //   })
  //   this.courseService.consultCourse(this.activatedRoute.snapshot.params['id']).subscribe( crs => {
  //     this.currentCourse = crs; 
  //     this.updatedCatId = crs.category.id;

  //     this.courseService
  //       .loadImage(this.currentCourse.image.idImage)
  //       .subscribe((img: Image) => {
  //         this.myImage = 'data' + img.type + ';base64' + img.image;
  //       })
  //   })
  // }

  ngOnInit(): void {
    this.courseService.listCategories()
      .subscribe(cats => {this.categories = cats._embedded.categories;})

    this.courseService.consultCourse(this.activatedRoute.snapshot.params['id'])
      .subscribe(crs => {this.currentCourse = crs;
        this.updatedCatId = crs.category.id
      });
  }

  // updateCourse() {
  //   this.currentCourse.category = this.categories.find(cat => cat.id == this.updatedCatId)!;
  //   if (this.isImageUpdated) {
  //     this.courseService
  //       .uploadImage(this.uploadedImage, this.uploadedImage.name)
  //       .subscribe((img: Image) => {
  //         this.currentCourse.image = img;

  //         this.courseService
  //           .updateCourse(this.currentCourse)
  //           .subscribe((prod) => {
  //             this.router.navigate(['cours']);
  //           });
  //       });
  //   } else {
  //     this.courseService.updateCourse(this.currentCourse).subscribe((course) => {
  //       this.router.navigate(['cours']);
  //     })
  //   }
  // }

  updateCourse() {
    this.currentCourse.category = this.categories.find(cat => cat.id == this.updatedCatId)!;
    this.courseService
      .updateCourse(this.currentCourse)
      .subscribe((crs) => {
        this.router.navigate(['cours']);
      });
  }

  onImageUpload(event: any) {
    if(event.target.files && event.target.files.length) {
      this.uploadedImage = event.target.files[0];
      this.isImageUpdated = true;
      const reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = () => {this.myImage = reader.result as string; };
    }
  }

  onAddImageCourse() {
    this.courseService
      .uploadImageCourse(this.uploadedImage, this.uploadedImage.name, this.currentCourse.id)
      .subscribe((img : Image) => {
        this.currentCourse.images.push(img)
      });
  }

  deleteImage(img : Image) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.courseService.deleteImage(img.idImage).subscribe(() => {
        //supprimer image du tableau currentCourse.images
        const index = this.currentCourse.images.indexOf(img, 0);
        if (index > -1) {
          this.currentCourse.images.splice(index, 1);
        }
    });
  }

}
