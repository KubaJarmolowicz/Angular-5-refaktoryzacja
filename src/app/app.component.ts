import { Component, OnInit, Input } from "@angular/core";

interface Task {
  name: string;
  completed: boolean;
}

const tasks = [
  { name: "Skontaktować się z zespołem marketingu", completed: false },
  { name: "Zbudować prezentację na spotkanie z inwestorami", completed: false },
  { name: "Ukończyć implementację pierwszego milestone'a", completed: false },
  { name: "Przygotować analizę projektu", completed: true },
  { name: "Utworzyć spotkanie - kickoff projektu", completed: true }
];

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  formModel = {
    newTodo: ""
  };

  @Input() tasks: Task[];

  ngOnInit() {
    this.tasks = [...tasks];
  }

  addTodo(task: string) {
    this.tasks.push({
      name: task,
      completed: false
    });
  }

  markTaskAsOposite(task: string) {
    const indexToModify = this.tasks.findIndex(item => item.name === task);
    this.tasks[indexToModify].completed = !this.tasks[indexToModify].completed;
  }
}
