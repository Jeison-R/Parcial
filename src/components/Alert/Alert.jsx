import style from './alert.module.css'

const Alert = ({ setState, state, message, type }) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.alert}>
          <h1 className={style.title}>{type}</h1>
          <p>{message}</p>
          <button
            className={style.button}
            onClick={() => setState({ ...state, alert: !state })}
          >
            Cerrar
          </button>
        </div>
      </div>
    </>
  )
}

export default Alert
