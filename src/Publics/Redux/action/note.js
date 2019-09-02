import axios from 'axios';
import { AsyncStorage } from 'react-native'
const url = 'https://apinoteapp.herokuapp.com/note'

export const getNote = () => {
  return {
    type: 'GET_NOTE',
    payload: axios.get(`${url}/`)
  };
};
export const getCatNote = () => {
  return {
    type: 'GET_CAT_NOTE',
    payload: axios.get(`${url}/category`)
  };
};
export const addNote = (data) => {
  return {
    type: 'ADD_NOTE',
    payload: axios.post(`${url}/`, data)
  };
};
export const addCat = (data) => {
  return {
    type: 'ADD_NOTE',
    payload: axios.post(`${url}/category`, data)
  };
};
export const editNote = (data, id) => {
  return {
    type: 'EDIT_NOTE',
    payload: axios.patch(`${url}/${id}`, data)
  };
};