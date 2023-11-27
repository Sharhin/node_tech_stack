import { TodoEntry } from "../types"

type props = {
  list: TodoEntry[]
}

export function TodoListComponent(props: props) {
  const { list } = props;
  return <ul>
    {list.map(i => {
      return <li key={i.id}>{i.title}</li>
    })}
  </ul>
}