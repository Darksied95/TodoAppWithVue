<template>
    <div class=" flex items-center h-10 gap-3 bg-d-VeryDarkDesaturatedBlue mb-5 rounded-md">
        <span
            class="ml-4 inline-block w-4 aspect-square border border-solid border-d-VeryDarkGrayishBlue rounded-[100%]"></span>
        <input type="text" placeholder="Create a new todo..." v-model="todo" @keydown.enter="handleEnter"
            class="flex-1 bg-d-VeryDarkDesaturatedBlue placeholder:text-d-DarkGrayishBlue placeholder:text-xs placeholder:font-semibold text-d-DarkGrayishBlue outline-none" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const todo = ref("")
const { addTodo } = defineProps<{ addTodo: (message: string) => void }>()


function handleEnter() {
    addTodo(todo.value)
    todo.value = ""
}
</script>