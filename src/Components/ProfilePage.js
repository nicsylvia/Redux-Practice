import React from 'react';
import { useSelector } from 'react-redux';
import { Reducer } from 'redux';

const ProfilePage = () => {

    const user = useSelector((state) => state.reducer.current )
  return (
    <div>
        <center>
            <h1>USER</h1>
            <p>Name: {user?.username}</p>
            <p>Email: {user?.email}</p>
            <p>Stack: {user?.stack}</p>
            <p>PhoneNo: {user?.phoneNo}</p>

        </center>
    </div>
  )
}

export default ProfilePage