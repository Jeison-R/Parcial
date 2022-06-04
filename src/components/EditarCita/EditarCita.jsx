import { useState } from 'react'
import uuid from 'react-uuid'
import style from './editarCita.module.css'

const EditarCita = ({ editarCitas, modal, setDetector }) => {
  console.log(editarCitas)
  const [datos, setDatos] = useState({
    id: editarCitas.id || '',
    nombreDueño: editarCitas.nombreDueño || '',
    nombreMascota: editarCitas.nombreMascota || '',
    fecha: editarCitas.fecha || '',
    hora: editarCitas.hora || '',
    sintomas: editarCitas.sintomas || ''
  })
  const { nombreDueño, nombreMascota, fecha, hora, sintomas } = datos
  const handleChange = e => {
    setDatos({
      ...datos,
      [e.target.id]: e.target.value,
      id: uuid()
    })
  }
  const editarCita = e => {
    e.preventDefault()
    const citas = JSON.parse(localStorage.getItem('citas'))
    const index = citas.findIndex(cita => cita.id === editarCitas.id)
    citas[index] = datos
    localStorage.setItem('citas', JSON.stringify(citas))
    modal(false)
    setDetector(JSON.parse(localStorage.getItem('citas')))
  }

  return (
    <>
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
        <button
          className={style.button}
          type='submit'
          onClick={e => editarCita(e)}
        >
          Confirmar
        </button>
      </form>
    </>
  )
}

export default EditarCita
