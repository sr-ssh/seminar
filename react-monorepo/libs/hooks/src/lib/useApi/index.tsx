import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

interface UseApiReturnType {
  loading: boolean;
  apiCall: (options: ApiCallOptions) => void;
}

interface ApiCallOptions {
  url: string;
  query?: Record<string, any>;
  method?: string;
  successCallback?: (response: AxiosResponse) => void;
  failedCallback?: (error: any) => void;
}

const UseApi = (): UseApiReturnType => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const token = useSelector(userSelectors.token);

  const apiCall = ({
    url,
    query,
    method,
    successCallback,
    failedCallback,
  }: ApiCallOptions): void => {
    setLoading(true);
    const params = query ?? {};
    const axiosOptions: AxiosRequestConfig = {
      url,
      method: method ?? 'get',
    };
    if (method === 'post' || method === 'delete') {
      axiosOptions.data = params;
    } else {
      axiosOptions.params = params;
    }
    // if (token && token.token) {
    //     axiosOptions.headers = {
    //         Authorization: token.token
    //     }
    // }
    axios(axiosOptions)
      .then(function (response) {
        // handle success
        successCallback?.(response);
      })
      .catch(function (error) {
        // handle error
        if (error?.response?.status === 401) {
          navigate('/login');
          // dispatch(userClear())
        }
        if (error?.response?.data?.data) {
          toast(error?.response?.data?.data);
        }
        failedCallback?.(error);
      })
      .finally(function () {
        // always executed
        setLoading(false);
      });
  };

  return { loading, apiCall };
};

export default UseApi;
