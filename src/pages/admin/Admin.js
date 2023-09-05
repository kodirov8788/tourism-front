import axios from '../../api/Axios';
import React, { useEffect, useState } from 'react'

function Admin() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getApi = async () => {
            await axios.get("/client/get")
                .then(res => setData(res.data))
                .catch(err => console.log(err))
        }
        getApi()
    }, [])
    const Delete = async (id) => {
        await axios.delete(`/client/delete/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div className='min-h-screen bg-blue-400 pt-[40px]'>
            <h1 className='text-center text-2xl font-bold mt-5'>Admin panel</h1>

            <ul className="border-2 border-gray-400 rounded w-4/5 m-auto mt-5">
                <li className='flex   justify-between text-center'>
                    <h2 className='w-1/5 border font-bold p-2'>Ism</h2>
                    <h2 className='w-1/5 border font-bold  p-2'>Email</h2>
                    <h2 className='w-1/5 border font-bold  p-2'>Number</h2>
                    <h2 className='w-1/5 border font-bold  p-2'>Address</h2>
                    <h2 className='w-1/5 border font-bold  p-2'>Date</h2>
                    <h2 className='w-1/5 border font-bold  p-2'>Payment</h2>
                    <h2 className='w-1/5 border font-bold  p-2'>Delete</h2>

                </li>
                {
                    data?.map(client => (
                        <li key={client._id} className='flex  w-full justify-between text-center my-3 rounded border overflow-hidden' >
                            <h2 className='w-1/5 border p-2'>{client.name}</h2>
                            <h2 className='w-1/5 border p-2'>{client.email}</h2>
                            <h2 className='w-1/5 border p-2'>{client.number}</h2>
                            <h2 className='w-1/5 border p-2'>{client.address}</h2>
                            <h2 className='w-1/5 border p-2'>17.02.2023</h2>

                            {
                                client?.payment ? <h2 className='text-green-500 w-1/5 border p-2'>To'lov qilingan</h2> : <h2 className='text-red-600 w-1/5 border p-2'>To'lov qilinmagan</h2>
                            }
                            <button onClick={() => Delete(client._id)} className='w-1/5 border bg-red-500 text-white p-2'>Delete client</button>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default Admin