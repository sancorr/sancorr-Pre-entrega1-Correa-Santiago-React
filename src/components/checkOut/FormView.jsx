import './formView.css'

const FormView = ({formData, handleChangeInput, handleOnSubmitForm }) => {
  
  return (
    <div className='form-formContainer'>
        <form className='form' onSubmit={handleOnSubmitForm} >
        <div className='form-inputsContainer'>
            <label htmlFor="firstName" >Nombre/s:</label>
            <input placeholder='Tu nombre aqui' type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChangeInput} />
        </div>
        <div className='form-inputsContainer'>
            <label htmlFor="lastName">Apellido:</label>
            <input placeholder='Tu apellido aqui' type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChangeInput} />
        </div>
        <div className='form-inputsContainer'>
            <label htmlFor="email">Email:</label>
            <input placeholder='usuario@email.com' type="email" id="email" name="email" value={formData.email} onChange={handleChangeInput} />
        </div>
        <div className='form-inputsContainer'>
            <label htmlFor="emailConfirm">Confirme su Email:</label>
            <input placeholder='usuario@email.com' type="email" id="emailConfirm" name="confirmEmail" value={formData.confirmEmail} onChange={handleChangeInput} />
        </div>
        <div className='form-inputsContainer'>
            <label htmlFor="address">Dirección:</label>
            <input placeholder='Tu dirección aqui' type="text" id="address" name="address" value={formData.address} onChange={handleChangeInput} />
        </div>
        <div className='form-inputsContainer'>
            <label htmlFor="telefono">Telefono:</label>
            <input placeholder='XXX-XXXXXXX' type="text" id="telefono" name="phone" value={formData.phone} onChange={handleChangeInput} />
        </div>
        <div >
            <button className='confirmButton' type="submit">Enviar</button>
        </div>
    </form>
    </div>
  )
}

export default FormView
