<script setup lang="ts">
import { ref, provide } from 'vue';
import CreateTodo from './components/CreateTodo.vue';
import TodoList from './components/TodoList.vue';
import Filters from './components/Filters.vue'
import type { ITodoList } from "@/types"

const todoList = ref<ITodoList[]>(JSON.parse((localStorage.getItem("todoList") || '[]')))


provide('todoStore', { todoList, deleteTodo, clearCompleted, updateCompletionStatus, filterTodos })

function addTodo(message: string) {
  if (!message) return
  const todo = { id: todoList.value.length, message, completed: false }
  todoList.value.push(todo)
  localStorage.setItem('todoList', JSON.stringify(todoList.value))

}

function updateCompletionStatus(id: number,) {
  const todo = todoList.value.find(e => e.id === id)

  if (todo) {
    todo.completed = !todo.completed
  }
  localStorage.setItem('todoList', JSON.stringify(todoList.value))

}

function deleteTodo(id: number) {
  todoList.value = todoList.value.filter(e => e.id !== id)
  localStorage.setItem('todoList', JSON.stringify(todoList.value))

}

function filterTodos(value: boolean | string) {
  let todos: string | ITodoList[] = localStorage.getItem('todoList') || "[]"

  if (todos) {
    todos = JSON.parse(todos)
  }

  if (typeof (todos) !== "string") {

    if (value === 'All') {
      todoList.value = todos
    } else if (value === "Active") {
      todoList.value = todos.filter(e => !e.completed)
    } else {
      todoList.value = todos.filter(e => e.completed)
    }
  }

}

function clearCompleted() {
  todoList.value = todoList.value.filter(e => !e.completed)
  localStorage.setItem('todoList', JSON.stringify(todoList.value))
}
</script>

<template>
  <main class="bg-desktop-dark min-h-screen bg-repeat-x bg-d-VeryDarkBlue pt-1">

    <div class="m-auto mt-20  max-w-[400px] ">
      <header class="flex justify-between items-center mb-5 ">
        <h1 class="text-white font-semibold text-xl tracking-[.5rem] ">TODO</h1>
        <img src="./assets/icon-sun.svg" class=" h-4" />
      </header>
      <CreateTodo :addTodo />
      <TodoList :todoListState="todoList" />
      <Filters />
    </div>

  </main>
</template>
