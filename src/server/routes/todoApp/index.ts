import { Router, Request } from "express";

import todos from "./../../../common/Root/screens/TodoApp/todos";

const router = Router();

router.get("/", (req, res) => {
  res.send(todos);
});

router.post("/", (req, res) => {
  todos.push(req.body);
});

router.param("id", (req, res, next, id) => {
  req.todoId = Number.parseInt(id);
  if (isNaN(req.todoId)) res.status(400).send("Bad Request");
  else next();
});

router.delete("/:id", (req, res) => {
  const idx = todos.findIndex(todo => todo.id === req.todoId);
  if (idx !== -1) {
    const deletedTodo = todos.splice(idx, 1)[0];
    res.send(deletedTodo);
  } else {
    res.status(400).send("Bad Request");
  }
});

router.patch("/:id", (req, res) => {
  const idx = todos.findIndex(todo => todo.id === req.todoId);
  if (idx !== -1) {
    const todo = todos[idx];
    todo.completed = !todo.completed;
    res.send(todo);
  } else {
    res.status(400).send("Bad Request");
  }
});

export default router;
