<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div
        class="flex items-center font-semibold bg-d-VeryDarkDesaturatedBlue text-d-LightGrayishBlue h-10 border-b border-b-d-VeryDarkGrayishBlue-50 text-xs p-5">
        <p class="">{{ todoList.length }} item<span v-if="todoList.length">s</span> left</p>
        <ul class="flex-1 flex justify-center gap-3 ">
            <li v-for="filter in ['All', 'Active', 'Completed']" :key="filter"
                class="text-d-DarkGrayishBlue cursor-pointer " :class="updateColor(filter)"
                @click="activeField = filter; filterTodos(filter)">
                {{ filter }}</li>
        </ul>
        <p @click="clearCompleted" class="cursor-pointer">Clear Completed</p>
    </div>
</template>

<script setup lang="ts">
import type { ITodoStore } from '@/types';
import { inject, ref } from 'vue';

const activeField = ref("All")

function updateColor(value: string) {
    return activeField.value === value && 'text-brightBlue'
}


const { todoList, filterTodos, clearCompleted }: ITodoStore = inject("todoStore")!
</script>