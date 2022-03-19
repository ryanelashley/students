import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-student-form',
  templateUrl: './new-student-form.component.html',
  styleUrls: ['./new-student-form.component.css']
})
export class NewStudentFormComponent implements OnInit {
  @Input() firstName: string = "";
@Input() lastName: string = "";

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("You submitted: " + this.firstName + " " + this.lastName);
}
}
