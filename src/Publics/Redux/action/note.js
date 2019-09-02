import axios from 'axios';
import { AsyncStorage } from 'react-native'
const url = 'http://192.168.6.141:3333/note'

export const getNote = () => {
  console.log(data)
  return {
    type: 'GET_NOTE',
    payload: axios.get(`${url}`,)
  };
};
export const getCatNote = () => {
  console.log(data)
  return {
    type: 'GET_CAT_NOTE',
    payload: axios.get(`${url}/category`,)
  };
};