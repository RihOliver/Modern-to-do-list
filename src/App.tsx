import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item'
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([])

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      description: taskName,
      done: false
    })
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>

        <C.Header>Lista de tarefas</C.Header>
        {/**Área de adicionar nova tarefa */}
        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
        {/**Lista de tarefas */}
      </C.Area>
    </C.Container>
  )
}

export default App;