import './App.css'
import { Pagination } from './pagination'

function App() {

  return (
    <>
      <h2>Products</h2>
      <Pagination limit={6}/>
    </>
  )
}

export default App
