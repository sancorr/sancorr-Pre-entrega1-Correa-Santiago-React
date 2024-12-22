
const FormView = ({formData, handleChangeInput, handleOnSubmitForm }) => {
  
  return (
    <div className='container mt-4'>
        <form className='row g-3' onSubmit={handleOnSubmitForm} >
        <div className='col-12 col-md-6'>
            <label htmlFor="firstName" className="form-label">Nombre/s:</label>
            <input placeholder='Tu nombre aqui' type="text" id="firstName" name="firstName" className="form-control" value={formData.firstName} onChange={handleChangeInput} />
        </div>
        <div className="col-12 col-md-6">
            <label htmlFor="lastName" className="form-label">Apellido:</label>
            <input placeholder='Tu apellido aqui' type="text" id="lastName" name="lastName" className="form-control" value={formData.lastName} onChange={handleChangeInput} />
        </div>
        <div className="col-12 col-md-6">
            <label htmlFor="email" className="form-label">Email:</label>
            <input placeholder='usuario@email.com' type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChangeInput} />
        </div>
        <div className='col-12 col-md-6'>
            <label htmlFor="emailConfirm" className="form-label">Confirme su Email:</label>
            <input placeholder='usuario@email.com' type="email" id="emailConfirm" name="confirmEmail" className="form-control" value={formData.confirmEmail} onChange={handleChangeInput} />
        </div>
        <div className='col-12 col-md-6'>
            <label htmlFor="address" className="form-label">Dirección:</label>
            <input placeholder='Tu dirección aqui' type="text" id="address" name="address" className="form-control" value={formData.address} onChange={handleChangeInput} />
        </div>
        <div className='col-12 col-md-6'>
            <label htmlFor="telefono" className="form-label">Telefono:</label>
            <input placeholder='XXX-XXXXXXX' type="text" id="telefono" name="phone" className="form-control" value={formData.phone} onChange={handleChangeInput} />
        </div>
        <div className="col-12">
            <button className="btn btn-success w-100" type="submit">Enviar</button>
        </div>
    </form>
    </div>
  )
}

export default FormView
