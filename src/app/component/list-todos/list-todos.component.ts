import { Component, OnInit } from "@angular/core";

class Todo {
  constructor(
    public id: number,
    public desc: string,
    public done: boolean,
    public createdDate: Date
  ) {}
}

@Component({
  selector: "app-list-todos",
  templateUrl: "./list-todos.component.html",
  styleUrls: ["./list-todos.component.css"]
})
export class ListTodosComponent implements OnInit {
  todos = [
    new Todo(1, "Angular", false, new Date()),
    new Todo(2, "React", false, new Date()),
    new Todo(3, "Spring boot", false, new Date())
    //{ id: 1, desc: "Angular", done: false, createdDate: new Date()}
  ];
  constructor() {}

  ngOnInit() {}
}
