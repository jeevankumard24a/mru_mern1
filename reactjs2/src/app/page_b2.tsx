'use client'

import {useForm} from "react-hook-form";

type FormData = {
    userName:string;
}


export default function PlayForm(){

    const {register ,  handleSubmit}
        = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log("Data is ", data);
    };

    return(
        <>
        <div className="bg-white w-full h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                    {...register('userName', {required: 'Username is required'})}
                    className="border bg-slate-800 border-gray-300 px-4 py-2 w-full rounded"
                    placeholder="Enter username"
                />

                <button type="submit" className="bg-blue-600 cursor-pointer"> Sunbit Form</button>

            </form>

        </div>
        </>
    )


}