'use client'

import  React , {useState, useEffect} from "react";
import { useForm } from "react-hook-form";

type BankCustomer = {
    customer_id: number;
    customer_name: string;
    bank_name: string;
    location: string;
}

export default function  BankCustomerForm(){

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BankCustomer>();

  const sendToServer = (data:BankCustomer)=>{

    console.log("Data to be sent to the server:", data);

  }
  return(
      <div  className="bg-slate-100  w-full  h-screen  flex flex-col gap-4 justify-center items-center"  >
          <form onSubmit={handleSubmit(sendToServer)}>
              <div>
                  <span className="text-black px-10">Customer Id</span>
                  <input type={"text"} className="border-2 bg-gray-300 mt-10 border-slate-500 text-slate-900"   {
                      ...register("customer_id")} />
              </div>
              <div>
                  <span className="text-black px-10">Customer Name</span>
                  <input type={"text"} className="border-2 bg-gray-300 mt-10 border-slate-500 text-slate-900"  {
                      ...register("customer_name")} />
              </div>
              <div>
                  <span className="text-black px-10">Bank Name</span>
                  <input type={"text"} className="border-2 bg-gray-300 mt-10 border-slate-500 text-slate-900"  {
                      ...register("bank_name")} />
              </div>
              <div>
                  <span className="text-black px-10">Bank Location</span>
                  <input type={"text"} className="border-2 bg-gray-300 mt-10 border-slate-500 text-slate-900"  {
                      ...register("location")} />
              </div>
              <button type={"submit"}  className="bg-blue-500 mt-10" > Send Bank Customer Data</button>

          </form>
      </div>
  )


}