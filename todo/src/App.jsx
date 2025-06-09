
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {

  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1>Todos</h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  )
}

export default App




