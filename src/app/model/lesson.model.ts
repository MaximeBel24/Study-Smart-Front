import Module from "module";

export class Lesson {
    id! : number;
    title! : string;
    description! : string;
    content! : string;
    duration! : number;

    module! : Module;
}