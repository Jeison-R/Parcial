import { useEffect, useState } from 'react'
import Alert from '../Alert/Alert'
import Container from '../Container/Container'
import Form from '../Formulario/Form'
import style from './home.module.css'

const Home = () => {
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if (!citasIniciales) {
    localStorage.setItem('citas', JSON.stringify([]))
  }
  const [state, setState] = useState({ alert: false, message: '', type: '' })
  const [citas, setCitas] = useState([])
  const [initialCitas, setInitialCitas] = useState(citasIniciales)
  const [detector, setDetector] = useState([])
  const { alert, message, type } = state

  useEffect(() => {
    setCitas(JSON.parse(localStorage.getItem('citas')))
  }, [initialCitas, detector])

  return (
    <>
      <div className={style.container}>
        <Form alert={setState} initialCitas={citas} setDetector={setDetector} />
        {citas.length !== 0 && (
          <Container citas={citas} setDetector={setDetector} />
        )}
        {alert && (
          <Alert
            setState={setState}
            state={state}
            message={message}
            type={type}
          />
        )}
      </div>
    </>
  )
}

export default Home
