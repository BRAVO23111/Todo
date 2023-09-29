import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../Features/Todo/todoSlice';

const Todos = () => {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Todos</h2>
      <ul className="space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <span className="text-white text-lg">{todo.text}</span>
              <button
                className="px-3 py-1 text-red-600 bg-red-300 hover:bg-red-400 rounded-md"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
