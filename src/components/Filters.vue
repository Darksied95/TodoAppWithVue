<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div
        class="flex items-center font-semibold bg-d-VeryDarkDesaturatedBlue text-d-LightGrayishBlue h-10 border-b border-b-d-VeryDarkGrayishBlue-50 text-xs p-5">
        <p class="">{{ todoList.length }} item<span v-if="todoList.length">s</span> left</p>
        <ul class="flex-1 flex justify-center gap-3 ">
            <li v-for="filter in ['All', 'Active', 'Completed']" :key="filter" class="text-d-DarkGrayishBlue "
                :class="updateColor(filter)" @click="activeField = filter">
                {{ filter }}</li>
        </ul>
        <p>Clear Completed</p>
    </div>
</template>

<script setup lang="ts">
import type { ITodoList } from '@/types';
import { inject, ref } from 'vue';

const activeField = ref("All")
console.log(activeField.value);

function updateColor(value: string) {
    return activeField.value === value && 'text-brightBlue'
}


const todoList = inject<ITodoList[]>("todoList", [])
</script>