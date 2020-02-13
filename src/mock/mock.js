import axios from 'axios'
import adapter from 'axios-mock-adapter'
import { todoList } from './data/todo.js'

let mockAdapter = new adapter(axios)

export default {
  start () {
    mockAdapter.onGet('/todo').reply(200, {
      todoList
    })
  }
}