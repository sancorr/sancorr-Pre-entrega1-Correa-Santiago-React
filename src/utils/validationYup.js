import { mixed, object, string } from "yup";

let buyerSchema = object({
    firstName: string().required(),
    lastName: string().required() ,
    email:string().email().required() ,
    confirmEmail: string().email().required(),
    address: string().required(),
    phone: mixed().required(),
})

export const formValidation= async (dataForm) => {

    try {
        await buyerSchema.validate(dataForm)    
        return { status: "success" }
    } catch (error) {
        return { status:"Error", message: error.message} 

    }
}