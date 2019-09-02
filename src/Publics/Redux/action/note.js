import axios from 'axios';
import { AsyncStorage } from 'react-native'
const url = 'http://192.168.6.141:3333/note'

export const getNote = () => {
  return {
    type: 'GET_NOTE',
    payload: axios.get(`${url}/`,)
  };
};
export const getCatNote = () => {
  return {
    type: 'GET_CAT_NOTE',
    payload: axios.get(`${url}/category`,)
  };
};
export const addNote = (data) => {
  return {
    type: 'ADD_NOTE',
    payload: axios.post(`${url}/`,data)
  };
};