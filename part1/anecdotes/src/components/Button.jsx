function Button({ name, state, setState }) {
  const handleClick = () => {
    setState(state + 1)
  }
  return <button onClick={handleClick}>{name}</button>
}
export default Button
