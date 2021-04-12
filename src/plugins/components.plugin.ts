
import Vue from 'vue';
import HeaderComponent from '@/components/header/header.component.vue';
import TodoListComponent from '@/components/todo-list/todo-list.component.vue';
import AddTaskComponent from '@/components/todo-list/add-task/add-task.component.vue';
import TasksListComponent from '@/components/todo-list/tasks-list/tasks-list.component.vue';

Vue.component('tl-header', HeaderComponent);
Vue.component('tl-todo-list', TodoListComponent)
Vue.component('tl-add-task', AddTaskComponent)
Vue.component('tl-tasks-list', TasksListComponent)