import { Component, Input } from "@angular/core";

@Component({
  selector: "tasks-counter",
  template: `
    <span>{{ filteredTasks.length }} / {{ allTasks.length }}</span>
  `,
  styles: []
})
export class TasksCounterComponent {
  @Input() allTasks: [];
  @Input() filteredTasks: [];
}
