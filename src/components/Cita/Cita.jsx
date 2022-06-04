import EditarCita from '../EditarCita/EditarCita'
import style from './cita.module.css'
import { useState } from 'react'

const Cita = ({
  nombreDueño,
  nombreMascota,
  fecha,
  hora,
  sintomas,
  id,
  setDetector
}) => {
  const [editarCitas, setEditarCitas] = useState({})
  const [citaModal, setCitaModal] = useState(false)
  const eliminarCita = id => {
    const citas = JSON.parse(localStorage.getItem('citas'))
    localStorage.setItem(
      'citas',
      JSON.stringify(citas.filter(cita => cita.id !== id))
    )
  }

  const editarCita = id => {
    const citas = JSON.parse(localStorage.getItem('citas'))
    setEditarCitas(citas.filter(cita => cita.id === id)[0])
  }

  return (
    <>
      <section className={style.section}>
        <label>Nombre del dueño: {nombreDueño}</label>
        <label>Nombre de la mascota: {nombreMascota}</label>
        <label>Fecha: {fecha}</label>
        <label>Hora: {hora}</label>
        <label>Síntomas: {sintomas}</label>
        <div className={style.container_button}>
          <button
            className={style.button}
            onClick={() => {
              editarCita(id)
              setCitaModal(!citaModal)
            }}
          >
            Editar
          </button>
          <button
            className={style.button}
            onClick={() => {
              eliminarCita(id)
              setDetector(JSON.parse(localStorage.getItem('citas')))
            }}
          >
            Eliminar
          </button>
        </div>
      </section>
      {citaModal && (
        <div className={style.container}>
          <EditarCita
            editarCitas={editarCitas}
            modal={setCitaModal}
            setDetector={setDetector}
          />
        </div>
      )}
    </>
  )
}

export default Cita
