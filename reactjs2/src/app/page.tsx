'use client'
import {useForm} from 'react-hook-form'

type FormType = {
    userName: string;
}

export default function PlayForm1(){
const {register, handleSubmit}
    = useForm<FormType>();
    const sendToServer=(formdata:FormType)=>{
        console.log(formdata);
    }
    return(
        <div className="flex bg-white justify-center items-center w-full h-screen">
            <form onSubmit={handleSubmit(sendToServer)}>
                <input {...register('userName')} className="bg-gray-600"  />
                <button type="submit"  className="bg-blue-500"> Submit Data  </button>

            </form>

        </div>
    )

}