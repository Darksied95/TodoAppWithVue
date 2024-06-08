<script setup lang="ts">
import CreateTodo from './components/CreateTodo.vue';
import TodoList from './components/TodoList.vue';
</script>

<template>
  <main class="bg-desktop-dark min-h-screen bg-repeat-x bg-d-VeryDarkBlue">

    <div class="m-auto max-w-[400px]">
      <header>
        <h1 class="text-white font-bold text-xl">TODO</h1>
        <img src="./assets/icon-sun.svg" />
      </header>
      <CreateTodo />
      <TodoList />
    </div>

  </main>
</template>
