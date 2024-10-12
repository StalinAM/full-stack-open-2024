function Button({ name, state, index, setState }) {
  if (name != 'vote') {
    const handleClick = () => {
      setState(state + 1)
    }
    return <button onClick={handleClick}>{name}</button>
  }
  const copyState = [...state]
  const newState = copyState.map((item, i) => {
    return i === index ? item + 1 : item
  })

  const handleClick = () => {
    setState(newState)
  }
  return <button onClick={handleClick}>{name}</button>
}
export default Button
