
import {Person} from './person';
export class teacher extends Person{
    constructor(name,degree){
        super(name);
        this.degree=degree;

    }
    teach(){
        console.log('teach');
    }
}