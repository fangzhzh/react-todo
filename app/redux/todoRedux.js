export const types = {
    ADD_ITEM: 'ADD_ITEM',
    DELETE_ITEM: 'DELETE_ITEM',
    TOGGLE_ITEM: 'TOGGLE_ITEM',
    DELETE_FINISHED: 'DELETE_FINISHED',
}

export const actionCreators = {
    addItem:(item) => {
      return { type: types.ADD_ITEM, payload: item}
    },
    toggleItem:(item, i) => {
      return {type: types.TOGGLE_ITEM, payload: i}
    },
    deleteFinished:() => {
      return {type: types.DELETE_FINISHED}
    }
}

const initialState = {
  items: [],
}

export const reducer = (state = initialState, action) => {
  const {type, payload} = action
  const {items} = state

  switch(type) {
      case types.ADD_ITEM: {
          return {
              ...state,
              items: [{label:payload, completed:false},
                ...items],
          }
      }
      case types.DELETE_FINISHED: {
        return {
          ...state,
          items: items.filter((item) => {
            return !item.completed;
          }),
        }
      }
      case types.DELETE_ITEM: {

      }
      case types.TOGGLE_ITEM: {
        return {
          ...state,
          items: items.map((item, i) => {
            if( i == payload) {
              return {label: item.label, completed: !item.completed}
            }
            return item
          }),
        }
      }
      default: {
          return state
      }
  }
}
