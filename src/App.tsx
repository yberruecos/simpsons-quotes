import './App.css'
import LayoutPrincipal from './containers/layoutPrincipal/layoutPrincipal'
import {QueryClient,QueryClientProvider} from 'react-query'

const queryClient=new QueryClient()

function App() {
  return (
    <div className="App">
      <header className='header'>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Simpsons_yellow_logo.svg/250px-The_Simpsons_yellow_logo.svg.png" className='logo-simpsons'/>
        </div>
      </header>
      <QueryClientProvider client={queryClient}>
        <LayoutPrincipal></LayoutPrincipal>
      </QueryClientProvider>
    </div>
  )
}

export default App
