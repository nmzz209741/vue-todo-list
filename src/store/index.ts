import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import { Result } from "./result";
import { Task } from '@/models/task.model';

import { db } from '../../firebase.config';

Vue.use(Vuex)

const collection: string = 'tasks'
const store: StoreOptions<Result<Task[]>> = {
  state: {
    name: "Todos for Shreeti",
    success: true,
    message: undefined,
    errorCode: 200,
    version: '1.0.0',
    data: new Array<Task>(),
  },
  mutations: {
    addTask(state, task: Task) {
      state.data.push(task)
    },

    editTask(state, task: Task) {
      let taskIndex: number = state.data.findIndex(t => t.id === task.id)
      state.data[taskIndex].isCompleted = task.isCompleted;
      state.data[taskIndex].description = task.description;
    },

    removeTask(state, id: string) {
      let taskIndex: number = state.data.findIndex(t => t.id === id)
      taskIndex > -1 ? state.data.splice(taskIndex, 1) : new Error('Invalid index')
    }
  },
  getters: {
    tasks(state): Array<Task> {
      // return state.data

      let tasks: Array<Task> = state.data

      if (tasks.length === 0) {
        db.collection(collection)
          .get()
          .then(res => {
            res.docs.map(task => {
              tasks.push({
                id: task.id,
                created: task.data().created,
                description: task.data().description,
                isCompleted: task.data().isCompleted
              })
            })
            state.data = tasks.sort((t, f) => <any>t.isCompleted - <any>f.isCompleted)
          })
      }

      return tasks.sort((t, f) => <any>t.isCompleted - <any>f.isCompleted)
    },
  },
  actions: {
    addTask(context, task: Task) {
      db.collection(collection)
        .add(task)
        .then(res => {
          task.id = res.id
          context.commit('addTask', task)
        })
        .catch(err => {

        })
    },
    editTask(context, task: Task) {

      db.collection(collection)
        .doc(task.id)
        .set(task)
        .then(res => {
          context.commit('editTask', task)
        })
        .catch(err => {

        })
    },
    removeTask(context, id: string) {
      db.collection(collection)
        .doc(id)
        .delete()
        .then(res => {
          context.commit('removeTask', id)
        })
        .catch(err => {

        })
    }
  }
}

export default new Vuex.Store<Result<Task[]>>(store)