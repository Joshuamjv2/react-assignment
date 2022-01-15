import './App.css';
import Card from './components/Card'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelope)

export default function App(){
  return (
    <div>
      <Card />
    </div>
  )
}