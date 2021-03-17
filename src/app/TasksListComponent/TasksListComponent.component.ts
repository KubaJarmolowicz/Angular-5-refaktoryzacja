import {
  Component,
  OnInit,
  Input,
  DoCheck,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "tasks-list",
  templateUrl: "./TasksListComponent.component.html",
  styleUrls: ["./TasksListComponent.component.css"]
})
export class TasksListComponent implements OnInit, DoCheck {
  @Input() allTasks: [];

  @Input() shouldShowCompleted: boolean;

  @Output() changeCompleteState = new EventEmitter<string>();

  buttonName: string;

  listTitle: string;

  @Input() filteredTasks: [];

  filterTasks(tasks) {
    return tasks.filter(t =>
      this.shouldShowCompleted ? t.completed : !t.completed
    );
  }

  ngOnInit() {
    this.filteredTasks = this.filterTasks(this.allTasks);

    this.listTitle = this.shouldShowCompleted ? "Ukończono" : "Do zrobienia";
    this.buttonName = this.shouldShowCompleted ? "Do zrobienia" : "Ukończono";
  }

  ngDoCheck() {
    this.filteredTasks = this.filterTasks(this.allTasks);
  }

  requestChangeTaskState(taskName) {
    this.changeCompleteState.emit(taskName);
  }
}
