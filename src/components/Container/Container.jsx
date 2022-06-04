import Cita from '../Cita/Cita'
import style from './container.module.css'

const Container = ({ citas, setDetector }) => {
  return (
    <>
      <div className={style.container}>
        {citas?.map(cita => (
          <Cita
            nombreDueño={cita.nombreDueño}
            nombreMascota={cita.nombreMascota}
            fecha={cita.fecha}
            hora={cita.hora}
            sintomas={cita.sintomas}
            id={cita.id}
            setDetector={setDetector}
          />
        ))}
      </div>
    </>
  )
}

export default Container
