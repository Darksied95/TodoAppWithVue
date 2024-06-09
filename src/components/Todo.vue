<!-- eslint-disable vue/multi-word-component-names -->

<script setup lang="ts">
import type { ITodoList } from '@/types';
import { inject } from 'vue';

defineProps<{ todo: ITodoList }>()

const updateCompletionStatus = inject<(id: number) => void>('updateCompletionStatus')!
const deleteTodo = inject<(id: number) => void>('deleteTodo')!

</script>

<template>
    <li
        class=" flex items-center  gap-3 bg-d-VeryDarkDesaturatedBlue text-d-LightGrayishBlue h-10 border-b border-b-d-VeryDarkGrayishBlue-50 group">
        <span
            class="ml-4  w-4 aspect-square border border-solid border-d-VeryDarkGrayishBlue rounded-[100%]  flex items-center justify-center cursor-pointer"
            :class="todo.completed && 'bg-checkBackground'" @click="updateCompletionStatus(todo.id)">
            <img v-if="todo.completed" src="/src/assets/icon-check.svg" class="w-2">
        </span>
        <p class="text-sm cursor-pointer flex-1" :class="todo.completed && 'line-through'">{{ todo.message }}</p>
        <img src="/src/assets/icon-cross.svg" class="mr-3 w-3 hidden group-hover:block" @click="deleteTodo(todo.id)" />
    </li>
</template>
