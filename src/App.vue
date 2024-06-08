<script setup lang="ts">
import CreateTodo from './components/CreateTodo.vue';
import TodoList from './components/TodoList.vue';
</script>

<template>
  <main class="bg-desktop-dark min-h-screen bg-repeat-x bg-d-VeryDarkBlue pt-1">

    <div class="m-auto mt-20  max-w-[400px] ">
      <header class="flex justify-between items-center mb-5 ">
        <h1 class="text-white font-semibold text-xl tracking-[.5rem] ">TODO</h1>
        <img src="./assets/icon-sun.svg" class=" h-4" />
      </header>
      <CreateTodo />
      <TodoList />
    </div>

  </main>
</template>
