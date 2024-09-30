import Part from './Part'

function Content({ parts }) {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.name} part={part.name} exercise={part.exercises} />
      ))}
    </>
  )
}
export default Content
