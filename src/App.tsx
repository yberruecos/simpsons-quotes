import './App.css'
import LayoutPrincipal from './containers/layoutPrincipal/layoutPrincipal'
import {QueryClient,QueryClientProvider} from 'react-query'

const queryClient=new QueryClient()

function App() {
  return (
  <div className='main'>
    <header className='header'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Simpsons_yellow_logo.svg/250px-The_Simpsons_yellow_logo.svg.png" className='logo-simpsons'/>
    </header>
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <LayoutPrincipal></LayoutPrincipal>
      </QueryClientProvider>
    </div>
  </div>
  )
}

export default App
