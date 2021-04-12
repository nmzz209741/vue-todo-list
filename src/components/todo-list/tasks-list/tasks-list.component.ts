import { Task } from '@/models/task.model'
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class TasksListComponent extends Vue {
  tasks: Array<Task> = new Array<Task>()

  mounted() {
    this.tasks = this.$store.getters.tasks;
  }

  completeTask(completed: boolean, task: Task) {
    task.isCompleted = completed
    this.$store.dispatch('editTask', task).then(
      res => {
        this.tasks = this.$store.getters.tasks
      }
    )

  }

  removeTask(id: string) {
    this.$store.dispatch('removeTask', id)
  }
}

