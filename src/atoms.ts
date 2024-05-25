import { atomFamily } from "recoil";
import { TODOS } from "./todos";

/**
 * dynamically create a new todo 
 * atom any todo component is 
 * created
 * */
export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: id => {
    return TODOS.find(x => x.id === id)
  },
});