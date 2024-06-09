<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Todo from './Todo.vue';
import type { ITodoList } from '@/types';

const { todoListState } = defineProps<{ todoListState: ITodoList[] }>()


</script>

<template>
    <ul>
        <Todo v-for="todo in todoListState" :todo :key="todo.id" />
    </ul>
</template>