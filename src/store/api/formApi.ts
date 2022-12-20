import axios from 'axios';
import { userDetails, userId } from '../../types/formType';


export const addUserApi = async (userPayload: userDetails) => {
return await axios({
    url: 'http://localhost:8081/user',
    method: 'post',
    data: userPayload,
  });
}

export const updateUserApi: any = async (userPayload: userId) => {

  return await axios({
    url: 'http://localhost:8081/user/' + userPayload.id,
    method: 'put',
    data: userPayload,
  });
}

export const getAllUserApi: any = () => {

  return axios.get('http://localhost:8081/user/')

}

export const getUserByIdApi: any = (id?: string) => {

  return axios.get('http://localhost:8081/user/' + id)

}

export const deleteUserApi: any = (id: string) => {
  return axios.delete('http://localhost:8081/user/' + id)

}


