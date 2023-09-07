import axios from '../../api/Axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { toast } from "react-toastify";
function Admin() {
    const [data, setData] = useState([]);
    let { setIsLoading, setSensor, sensor } = useContext(AuthContext)

    useEffect(() => {
        const getApi = async () => {
            await axios.get("/client/get")
                .then(res => setData(res.data))
                .catch(err => console.log(err))
        }
        getApi()
    }, [sensor])
    const Delete = async (id) => {
        setIsLoading(true)
        setSensor(true)
        await axios.delete(`/client/delete/${id}`)
            .then(res => {
                // console.log(res)
                setIsLoading(false)
                setSensor(false)
                toast.success("ma'lumot o'chirildi!", {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
                toast.error("serverda error!", {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
    }

    const makePayment = async (id) => {

        setIsLoading(true)
        setSensor(true)
        await axios.put(`/client/makepayment/${id}`)
            .then(res => {
                // console.log(res)
                setIsLoading(false)
                setSensor(false)
                toast.success(res.data, {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
                toast.error("serverda error!", {
                    position: toast.POSITION.TOP_RIGHT
                });
            })

    }

    return (
        <div className='min-h-screen bg-blue-400 pt-[40px]'>

            <h1 className='text-center text-2xl font-bold mt-5'>Admin panel</h1>

            <div class="relative w-[94%] rounded-sm md:w-4/5 mx-auto mt-5 overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Ism
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Number
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Address
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Payment
                            </th>
                            <th scope="col" class="px-6 py-3">
                                date
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Delete
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Bron Datails
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map(client => (
                                <tr key={client._id} class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {client.name}
                                    </th>
                                    <td class="px-6 py-4">
                                        {client.email}
                                    </td>
                                    <td class="px-6 py-4">
                                        {client.number}
                                    </td>
                                    <td class="px-6 py-4">
                                        {client.address}
                                    </td>
                                    {client.payment ?
                                        <td class="px-6 py-4 text-green-500 flex items-center justify-around">
                                            To'lov qilingan
                                            <input id="default-checkbox" checked disabled type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                        </td> : <td class="px-6 py-4 text-red-500 flex items-center justify-around">
                                            To'lov qilinmagan  <input onChange={() => makePayment(client._id)} id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                        </td>}
                                    <td class="px-6 py-4">
                                        17.02.2023
                                    </td>
                                    <td class="px-6 py-4">
                                        <button onClick={() => Delete(client._id)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete client</button>
                                    </td>
                                    <td class="px-6 py-4">
                                        {client.trip?.text}
                                    </td>

                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default Admin