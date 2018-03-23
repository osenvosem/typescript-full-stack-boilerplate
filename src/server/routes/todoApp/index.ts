import { Router } from "express";

import todos from "./../../../common/Root/screens/TodoApp/todos";

const router = Router();

router.get("/", (req, res) => {
  res.send(todos);
});

router.post("/", (req, res) => {
  todos.push(req.body);
});

export default router;
