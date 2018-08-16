/**
 * Created by aurasix on 8/15/18.
 */
import axios from 'axios';

const axiosAuth = axios.create({
  baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
});

export default axiosAuth
