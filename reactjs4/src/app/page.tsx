'use client'

import  React , {useState, useEffect} from "react";
import { useForm } from "react-hook-form";

type Book = {
  book_id: number;
  book_name: string;
  author_name: string;
}

export default function  BookForm(){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Book>();
  const sendToServer = (data:Book)=>{
    console.log(data);
    fetch("http://localhost:5000/updateBook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  }



  return(
      <div  className="bg-slate-100  w-full  h-screen  flex flex-col gap-4 justify-center items-center"  >
        <form onSubmit={handleSubmit(sendToServer)}>
          <div>
            <span className="text-black px-10">Book Id</span>
            <input type={"text"} className="border-2 bg-gray-300 mt-10 border-slate-500 text-slate-900"   {
              ...register("book_id")} />
          </div>
          <div>
            <span className="text-black px-10">Customer Name</span>
            <input type={"text"} className="border-2 bg-gray-300 mt-10 border-slate-500 text-slate-900"  {
              ...register("book_name")} />
          </div>
          <div>
            <span className="text-black px-10">Bank Name</span>
            <input type={"text"} className="border-2 bg-gray-300 mt-10 border-slate-500 text-slate-900"  {
              ...register("author_name")} />
          </div>

          <button type={"submit"}  className="bg-blue-500 mt-10" > Send Bank Customer Data</button>

        </form>
      </div>
  )

}