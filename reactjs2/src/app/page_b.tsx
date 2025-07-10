'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
    username: string;
};

export default function PlayForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <div className="flex bg-white w-full justify-center items-center h-screen">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-100 p-6 rounded shadow-md">
                <div className="mb-4">
                    <label className="block mb-1 font-medium text-gray-700">Username</label>
                    <input
                        {...register('username', { required: 'Username is required' })}
                        className="border border-gray-300 px-4 py-2 w-full rounded"
                        placeholder="Enter username"
                    />
                    {errors.username && (
                        <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
