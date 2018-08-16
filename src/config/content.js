/**
 * Created by aurasix on 8/15/18.
 */
import axios from 'axios';

const axiosContent = new axios.create({
  baseURL: 'https://vue-cars-garage.firebaseio.com/'
})

export default axiosContent
