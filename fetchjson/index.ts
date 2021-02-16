import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/todos';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(`${URL}/2`).then(res => {
  const todo = res.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logTodo(id, title, completed)
})

const logTodo = (id: number, title: string, completed: boolean) => {
console.log(`
The todo with ID ${id}
Title: ${title}
Is it completed? ${completed}
`)
}