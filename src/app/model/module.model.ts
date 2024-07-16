import { Course } from "./course.model";

export class Module {
    id! : number;
    title! : string;
    description! : string;
    duration! : number;

    course! : Course;
}