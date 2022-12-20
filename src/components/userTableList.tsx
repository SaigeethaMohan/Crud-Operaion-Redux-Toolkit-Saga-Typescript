import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router'
import { userActions, userSelector } from '../store/reducers'
import { useAppDispatch } from '../hooks';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorComponent from '../components/errorComponent';
import {userDetails, userId} from '../types/formType'

const UserTableList = () => {
  const histry = useNavigate();
  const dispatch = useAppDispatch();
  const { status, data, error } = useSelector(userSelector)


  useEffect(() => {
    dispatch(userActions.fecthAllUserRequest())
  }, [dispatch])

  const renderHeader = () => {
    const header = ["Id", "Name", "Email", "Address", "Action"]
    return header.map((headerData, index) => {
      return <th key={index}> {headerData.toUpperCase()} </th>
    })
  }




  const editData = (id:string|number) => {
    histry(`/update/${id}`)
  }

  const removeData = (id: string|number) => {
    if (window.confirm('Are you sure you wish to delete this item?')) {
      toast.error("User Deleted Successfully!", {
        position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
      });
      setTimeout(()=>{
        dispatch(userActions.deleteUserRequest(id))
      }, 1500)
      setTimeout(()=>{
       dispatch(userActions.fecthAllUserRequest())
      }, 2000)
    }
  }

  const renderBody = () => {
      return data && data.map((tableData:userDetails, index:string) => {
      return (

        <tr key={index}>
          <td>{tableData.id}</td>
          <td>{tableData.name}</td>
          <td>{tableData.email}</td>
          <td>{tableData.address}</td>
          <td className="edit-buttons">
            <button className="edit" onClick={() => editData(tableData.id ?? '')}>Edit</button>
            <button className="delete" onClick={() => removeData(tableData.id ?? '')}>Delete</button>
            <ToastContainer />
          </td>
      
        </tr>

      )
    })
  }

  const handleAddForm = () => {
    histry('/add')
  }


  return (
    <div className='margin-container'>
    
      {status?<div className="loader"></div>:error?<ErrorComponent error={error}/>:

  <div>
      <h1 className='text-center-align header-text-color'>User List
        <button type='submit' className="submit-button add-button-position m-top-10" onClick={() => handleAddForm()}>Add Form</button></h1>

      <div className='center-align'>
        <table className="table">
          <thead>
            <tr>
              {renderHeader()}

            </tr>
          </thead>
          <tbody>
            {renderBody()}
          </tbody>
        </table>
      </div>
      </div>
}

    </div>
  )
};

export default UserTableList;