import './App.css'
import { TwitterFollowCard } from './components/TwitterFollowCard'
export function App() {
  return (
    <section className='app'>
      <TwitterFollowCard username='agusef22' name='Agustin Fernandez' />
      <TwitterFollowCard username='midudev' name='Miguel Angel Duran' />
      <TwitterFollowCard username='cancuuu' name='Juan Cruz Lujan' />
      <TwitterFollowCard username='Brunodeangelis' name='Bruno DeAngelis' />
    </section>
  )
}

export default App
