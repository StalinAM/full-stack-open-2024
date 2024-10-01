function Total({ parts }) {
  const total = parts.map((part) => part.exercises)
  console.log(total)

  return (
    <p>
      Number of exercises {total.reduce((acc, current) => acc + current, 0)}
    </p>
  )
}
export default Total
