import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { List } from './components/List'


function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className={styles.wrapper}>
        <List />
      </div>
    </>
  )
}

export default App
