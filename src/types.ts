export interface ITodoList {
    message: string
    id: number
    completed: boolean
}

export interface ITodoStore {
    todoList: ITodoList[],
    deleteTodo: (id: number) => void,
    clearCompleted: () => void,
    updateCompletionStatus: (id: number) => void,
    filterTodos: (value: boolean | string) => void
}