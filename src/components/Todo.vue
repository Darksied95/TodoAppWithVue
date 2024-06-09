<!-- eslint-disable vue/multi-word-component-names -->

<script setup lang="ts">
import type { ITodoList } from '@/types';
import { inject } from 'vue';

defineProps<{ todo: ITodoList }>()

const updateCompletionStatus = inject<(e: number) => void>('updateCompletionStatus')!
</script>

<template>
    <li
        class=" flex items-center  gap-3 bg-d-VeryDarkDesaturatedBlue text-d-LightGrayishBlue h-10 border-b border-b-d-VeryDarkGrayishBlue-50">
        <span
            class="ml-4 inline-block w-4 aspect-square border border-solid border-d-VeryDarkGrayishBlue rounded-[100%]"
            @click="updateCompletionStatus(todo.id)"></span>
        <p class="text-sm">{{ todo.message }}</p>
    </li>
</template>
