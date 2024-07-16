import { sampleProducts } from './data'
import './App.css'

function App() {
  return (
    <div>
      <header>TS Amazona</header>
      <main>
        <ul>
          {sampleProducts.map((product) => {
           return <li key={product.slug}>
            <img src={product.image} alt={product.image} className='product-image' />
             <h2>{product.name}</h2> 
            </li>
          })}
        </ul>
      </main>
      <footer>All right reserved</footer>
    </div>
  )
}

export default App