import { object, string } from "yup";

let buyerSchema = object({
    firstName: string().required(),
    lastName: string().required() ,
    email:string().email().required() ,
    confirmEmail: string().email().required(),
    address: string().required(),
    phone: string().required().matches(/^[0-9]+$/,"el telefono solo debe contener numeros")
})

export const formValidation= async (dataForm) => {

    try {
        await buyerSchema.validate(dataForm, { abortEarly: false })    
        return { status: "success" }
    } catch (error) {
        return { status:"Error", message: error.errors.join(", ")} 

    }
}