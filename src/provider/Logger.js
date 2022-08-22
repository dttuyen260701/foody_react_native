

const Logger = (reducer) => {
  return (prevState, action) => {
    console.group(action.type)
    console.log('Prev State: ', prevState)
    console.log('Action: ', action)

    const next_State = reducer(prevState, action)
    
    console.groupEnd()
    return next_State
  }
}

export default Logger