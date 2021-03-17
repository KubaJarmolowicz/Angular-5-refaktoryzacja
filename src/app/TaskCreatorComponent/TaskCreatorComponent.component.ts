import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "task-creator",
  templateUrl: "./TaskCreatorComponent.component.html",
  styles: [
    `
      input {
        padding: 3px 10px;
        width: 520px;
        border: 1px solid rgb(63, 63, 63);
      }
    `
  ]
})
export class TaskCreatorComponent {
  @Output() addTodo = new EventEmitter<string>();

  formModel = {
    newTodo: ""
  };

  requestAddTodo() {
    if (!this.formModel.newTodo) {
      alert("Treść nie może być pusta!");
      return;
    }

    this.addTodo.emit(this.formModel.newTodo);
    this.formModel.newTodo = "";
  }
}
