
const FormView = ({formData, handleChangeInput, handleOnSubmitForm }) => {
  
  return (
    <form onSubmit={handleOnSubmitForm} >
        <div>
            <label htmlFor="firstName" >Nombre/s:</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChangeInput} />
        </div>
        <div>
            <label htmlFor="lastName">Apellido:</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChangeInput} />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChangeInput} />
        </div>
        <div>
            <label htmlFor="emailConfirm">Confirme su Email:</label>
            <input type="email" id="emailConfirm" name="confirmEmail" value={formData.confirmEmail} onChange={handleChangeInput} />
        </div>
        <div>
            <label htmlFor="address">Dirección:</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChangeInput} />
        </div>
        <div>
            <label htmlFor="telefono">Telefono:</label>
            <input type="text" id="telefono" name="phone" value={formData.phone} onChange={handleChangeInput} />
        </div>
        <div>
            <button type="submit">Enviar</button>
        </div>
    </form>
  )
}

export default FormView
