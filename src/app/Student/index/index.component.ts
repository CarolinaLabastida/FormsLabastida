import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  @Input()
  visible: boolean = false;

  @Output()
  visibleChange = new EventEmitter<boolean>()

  onClickNew(): void {
    // this.visible = false;
    this.visibleChange.emit(false);
  }

  @Input()
  public Students: Array<Student> = [];
}