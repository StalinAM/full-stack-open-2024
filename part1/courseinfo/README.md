# Ejercicios 1.1.-1.2.

Los ejercicios se envían a través de GitHub y marcando los ejercicios completados en el sistema de envío ejercicios.

Los ejercicios se envían una parte a la vez. Cuando hayas enviado los ejercicios para una parte del curso, ya no podrás enviar ejercicios incompletos para la misma parte.

Ten en cuenta que en esta parte hay más ejercicios además de los que se encuentran a continuación. No envíes tu trabajo hasta que hayas completado todos los ejercicios que deseas enviar para la parte.

Puedes enviar todos los ejercicios de este curso al mismo repositorio o utilizar varios repositorios. Si envías ejercicios de diferentes partes en el mismo repositorio, utiliza un esquema de nomenclatura razonable para los directorios.

Una estructura de archivos muy funcional para el repositorio de envíos es la siguiente:

```js
part0
part1
courseinfo
unicafe
anecdotes
part2
phonebook
countries
```

Mira este repositorio de ejemplo para el envío de ejercicios!

Para cada parte del curso hay un directorio, que se ramifica en directorios que contienen una serie de ejercicios, como "unicafe" para la parte 1.

La mayoría de los ejercicios del curso construyen una aplicación más grande, por ejemplo: courseinfo, unicafe y anecdotes en esta parte, poco a poco. Es suficiente con enviar la aplicación terminada. Puedes hacer un commit después de cada ejercicio, pero no es obligatorio. Por ejemplo, la aplicación de información del curso se construye en los ejercicios 1.1.-1.5. En este caso solo necesitas enviar el resultado final del ejercicio 1.5.

Por cada aplicación web para una serie de ejercicios, se recomienda enviar todos los archivos relacionados con esa aplicación, excepto para el directorio node_modules.

## 1.1: Información del Curso, paso 1

La aplicación en la que comenzaremos a trabajar en este ejercicio se continuara desarrollando en algunos de los siguientes ejercicios. En este y otros conjuntos de ejercicios futuros de este curso, es suficiente enviar solo el estado final de la aplicación. Si lo deseas, también puedes crear un commit para cada ejercicio de la serie, pero esto es completamente opcional.

Usa Vite para inicializar una nueva aplicación. Modifica main.jsx para que coincida con lo siguiente

```js
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```

y App.jsx para que coincida con lo siguiente

```jsx
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}
export default App
```

y elimina los archivos adicionales App.css, y index.css, también elimina el directorio assets.

Desafortunadamente, toda la aplicación está en el mismo componente. Refactoriza el código para que conste de tres componentes nuevos: Header, Content y Total. Todos los datos aún residen en el componente App, que pasa los datos necesarios a cada componente mediante props. Header se encarga de mostrar el nombre del curso, Content muestra las partes y su número de ejercicios y Total muestra el número total de ejercicios.

Define los nuevos componentes en el archivo App.jsx.

El cuerpo del componente App será aproximadamente como el siguiente:

```jsx
const App = () => {
  // const-definitions

  return (
    <div>
      <Header course={course} />
      <Content ... />
      <Total ... />
    </div>
  )
}
```

ADVERTENCIA No trates de programar todos los componentes de corrido, porque esto podría ciertamente romper toda la aplicación. Procede en pequeños pasos, primero haz por ejemplo: el componente Header y solo cuando confirmes que funciona, podrás continuar con el siguiente componente.

El progreso cuidadoso y en pequeños pasos puede parecer lento, pero en realidad es con diferencia la forma más rápida de progresar. El famoso desarrollador de software Robert "Uncle Bob" Martin ha declarado

"La única manera de ir rápido, es hacerlo bien"

es decir, según Martin, avanzar con cuidado y con pequeños pasos es incluso la única manera de ser rápido.

## 1.2: Información del Curso, paso 2

Refactoriza el componente Content para que no muestre ningún nombre de partes o su número de ejercicios por sí mismo. En su lugar, solo representa tres componentes Part de los cuales cada uno representa el nombre y el número de ejercicios de una parte.

```jsx
const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}
```

Nuestra aplicación pasa información de una manera bastante primitiva en este momento, ya que se basa en variables individuales. Esta situación mejorará pronto en la parte 2, pero antes de eso, vamos a la parte 1b para aprender acerca de JavaScript.

# Ejercicios 1.3.-1.5.

Seguimos construyendo la aplicación en la que empezamos a trabajar en los ejercicios anteriores. Puedes escribir el código en el mismo proyecto, ya que solo estamos interesados en el estado final de la aplicación enviada.

Pro-tip: puedes tener problemas cuando se trata de la estructura de los props que reciben los componentes. Una buena manera de aclarar las cosas es imprimiendo los props en la consola, por ejemplo, de la siguiente manera:

```jsx
const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}
```

Si y cuando recibes un mensaje de error

Objects are not valid as a React child

ten en cuenta las cosas dichas aquí.

## 1.3: Información del Curso, paso 3

Avancemos para usar objetos en nuestra aplicación. Modifica las definiciones de las variables del componente App de la siguiente manera y también refactoriza la aplicación para que siga funcionando:

```jsx
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return <div>...</div>
}
```

## 1.4: Información del Curso paso 4

Coloca los objetos en un array. Modifica las definiciones de las variables de App de la siguiente forma y modifica las otras partes de la aplicación que sean necesarias para que continue funcionando:

```jsx
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return <div>...</div>
}
```

Nota: en este punto puedes asumir que siempre hay tres elementos, por lo que no es necesario pasar por los arrays usando bucles. Volveremos al tema de la renderización de componentes basados en elementos dentro de arrays con una exploración más profunda en la siguiente parte del curso.

Sin embargo, no pases diferentes objetos como props separados del componente App a los componentes Content y Total. En su lugar, pásalos directamente como un array:

```jsx
const App = () => {
  // definiciones de const

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}
```

## 1.5: Información del Curso paso 5

Llevemos los cambios un paso más allá. Cambia el curso y sus partes a un solo objeto JavaScript. Arregla todo lo que se rompa.

```jsx
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return <div>...</div>
}
```
