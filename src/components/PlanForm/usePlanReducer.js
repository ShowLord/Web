export default function reducer(state, action) {
  switch (action.type) {
    case 'date':
      return {
        ...state,
        date: action.value,
      };
    case 'time':
      return {
        ...state,
        time: action.value,
      };
    case 'imgList':
      return {
        ...state,
        imgList: action.value,
      };
    case 'color':
      return {
        ...state,
        color: action.value,
      };
    case 'todoList':
      return {
        ...state,
        todoList: action.value,
      };
    case 'addTo':
      return {
        ...state,
        addTo: action.value,
      };
    default:
      return state;
  }
}
