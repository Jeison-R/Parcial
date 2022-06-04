import { useEffect, useState } from 'react'
import uuid from 'react-uuid'
import style from './form.module.css'

const Form = ({ alert, initialCitas, setDetector }) => {
  const [datos, setDatos] = useState({
    id: '',
    nombreDueño: '',
    nombreMascota: '',
    fecha: '',
    hora: '',
    sintomas: ''
  })
  const [citas, setCitas] = useState(initialCitas || [])
  const { nombreDueño, nombreMascota, fecha, hora, sintomas } = datos
  const handleChange = e => {
    setDatos({
      ...datos,
      [e.target.id]: e.target.value,
      id: uuid()
    })
  }

  useEffect(() => {
    if (citas.length !== 0) {
      localStorage.setItem('citas', JSON.stringify(citas))
    }
  }, [citas])

  const handleSubmit = e => {
    e.preventDefault()

    if (!nombreDueño) {
      alert({
        alert: true,
        message: 'El nombre del dueño es obligatorio',
        type: 'Error'
      })
      return
    }

    if (!nombreMascota) {
      alert({
        alert: true,
        message: 'El nombre de la mascota es obligatorio',
        type: 'Error'
      })
      return
    }

    if (!fecha) {
      alert({
        alert: true,
        message: 'La fecha es obligatoria',
        type: 'Error'
      })
      return
    }

    if (!hora) {
      alert({
        alert: true,
        message: 'La hora es obligatoria',
        type: 'Error'
      })
      return
    }

    if (!sintomas) {
      alert({
        alert: true,
        message: 'Los sintomas son obligatorios',
        type: 'Error'
      })
      return
    }
    setCitas([...citas, datos])
    setDetector([...citas, datos])
    setDatos({
      id: '',
      nombreDueño: '',
      nombreMascota: '',
      fecha: '',
      hora: '',
      sintomas: ''
    })
  }

  return (
    <form className={style.form} onChange={handleChange}>
      <label className={style.label} htmlFor='nombreDueño'>
        Nombre dueño
      </label>
      <input
        className={style.input}
        id='nombreDueño'
        type='text'
        autoComplete='none'
        value={nombreDueño}
      />
      <label className={style.label} htmlFor='nombreMascota'>
        Nombre mascota
      </label>
      <input
        className={style.input}
        id='nombreMascota'
        type='text'
        autoComplete='none'
        value={nombreMascota}
      />
      <label className={style.label} htmlFor='fecha'>
        Fecha
      </label>
      <input className={style.input} id='fecha' type='date' value={fecha} />
      <label className={style.label} htmlFor='hora'>
        Hora
      </label>
      <input className={style.input} id='hora' type='time' value={hora} />
      <label className={style.label}>Síntomas</label>
      <textarea
        className={style.textarea}
        id='sintomas'
        value={sintomas}
      ></textarea>
      <button className={style.button} type='submit' onClick={handleSubmit}>
        Agregar
      </button>
    </form>
  )
}

export default Form
