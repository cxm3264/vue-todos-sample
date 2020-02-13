import axios from 'axios'

export const getTodo = ( {commit} ) => {
  axios.get('/todo').then(({ data }) => {
    commit('setTodo', data.todoList)
  })
}