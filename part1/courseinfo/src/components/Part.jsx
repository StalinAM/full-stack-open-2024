function Part({ part, exercise }) {
  return (
    <p key={part}>
      {part} {exercise}
    </p>
  )
}
export default Part
