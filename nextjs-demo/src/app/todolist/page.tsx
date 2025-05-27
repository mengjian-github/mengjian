"use client"

import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoListPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now(), text: input.trim(), completed: false },
    ]);
    setInput("");
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <main style={{ maxWidth: 400, margin: "40px auto", padding: 20, border: "1px solid #eee", borderRadius: 8 }}>
      <h1>TODO List</h1>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="添加新任务"
          style={{ flex: 1, padding: 8 }}
          onKeyDown={e => { if (e.key === 'Enter') addTodo(); }}
        />
        <button onClick={addTodo} style={{ padding: "8px 16px" }}>添加</button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              style={{ marginRight: 8 }}
            />
            <span style={{ flex: 1, textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: 8, color: "#f00", background: "none", border: "none", cursor: "pointer" }}>删除</button>
          </li>
        ))}
      </ul>
    </main>
  );
} 