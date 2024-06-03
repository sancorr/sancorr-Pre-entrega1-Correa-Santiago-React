import { object, string } from "yup";

let buyerSchema = object({
    firstName: string().required("Nombre es un campo requerido"),
    lastName: string().required("Apellido es un campo requerido") ,
    email:string().email().required("Email es un campo requerido") ,
    confirmEmail: string().email().required("Debe confirmar su Email"),
    address: string().required("Dirección es un campo requerido"),
    phone: string().required("El teléfono es un campo requerido").matches(/^[0-9]+$/, "solo debe contener numeros.")
})

export const formValidation= async (dataForm) => {

    try {
        await buyerSchema.validate(dataForm, { abortEarly: false })    
        return { status: "success" }
    } catch (error) {
        return { status:"Error", message: error.errors.join(", ")} 

    }
}