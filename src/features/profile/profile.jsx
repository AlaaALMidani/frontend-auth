import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
export const Profile = () => {
        
    const dispatch = useDispatch()
    const state = useSelector(state => state.login)

    return (
        <div className="p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
        <img src={state.data.user.image} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-center mb-2">{state.data.user.firstName} {state.data.user.lastName}</h1>
        <div className="flex flex-col items-center">
          <p className="mb-2"><strong>Email:</strong> {state.data.user.email}</p>
          <p className="mb-2"><strong>Phone:</strong> {state.data.user.phoneNumber}</p>
          <p className="mb-2"><strong>Gender:</strong> {state.data.user.gender}</p>
          <p className="mb-2"><strong>Address:</strong> {state.data.user.address}</p>
          <a href={state.data.user.cv} download className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Download CV</a>
        </div>
      </div>
    )
}
