<script setup lang="ts">
import { ref, provide } from 'vue';
import CreateTodo from './components/CreateTodo.vue';
import TodoList from './components/TodoList.vue';
import Filters from './components/Filters.vue'
import type { ITodoList } from "@/types"

const todoList = ref<ITodoList[]>([])

provide('updateCompletionStatus', updateCompletionStatus)
provide("deleteTodo", deleteTodo)
provide("todoList", todoList)

function addTodo(message: string) {
  if (!message) return
  const todo = { id: todoList.value.length, message, completed: false }
  todoList.value.push(todo)

}

function updateCompletionStatus(id: number,) {
  const todo = todoList.value.find(e => e.id === id)

  if (todo) {
    todo.completed = !todo.completed
  }

}

function deleteTodo(id: number) {
  todoList.value = todoList.value.filter(e => e.id !== id)

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
