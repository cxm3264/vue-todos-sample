import mock from 'mockjs'

const COUNT = [1,2,3,4,5]
let todoList = []

for (let i = 0; i < COUNT.length; i++) {
  todoList.push({
    id: mock.Random.guid(),
    title: mock.Random.name(),
    isLock: mock.Random.boolean(),
    count: mock.Random.integer(0,5),
    isDelete: false,
    record: COUNT.map(() => {
      return {
        text: mock.Random.cparagraph(2),
        isChecked:  mock.Random.boolean(),
        isDelete: false
      }
    })
  })
}

export {
  todoList
}