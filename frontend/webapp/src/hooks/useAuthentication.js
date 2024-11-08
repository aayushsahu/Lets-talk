import { useMutation, /* useSnackbar, */ useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

const login = async (credentials) => {
  console.log('From login handler', JSON.stringify(credentials));
  const loginResp = await fetch('http://localhost:7007/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', 
      'Accept': 'application/json'
    },
    body: JSON.stringify(credentials)
  });

  if (!loginResp.ok) throw new Error('Authentication failed!');

  if (loginResp.body.loginStatus) throw new Error(`Authentication failed! Reason: ${loginResp.body.loginStatus}`);

  return await loginResp.json();
};

const logout = async () => {};

const useAuthentication = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: loginMutation, isLoading: isLoggingIn } = useMutation(login, {
    onSuccess: (data) => {
      console.log('logging data from useAuthentication hook onSuccess', JSON.stringify(data));
      queryClient.setQueryData('user', data.token);
      navigate('/home');
    },
    onError: (error) => {
      console.log('logging data from useAuthentication hook onError', JSON.stringify(error.errorMessage));
      navigate('');
    }
  });
  const { mutate: logoutMutation, isLoading: isLoggingOut } = useMutation(logout, {
    onSuccess: (data) => {
      
      console.log('logging data from useAuthentication hook onSuccess', JSON.stringify(data));
      queryClient.setQueryData('user', null);
      navigate('/');
    },
    onError: (error) => {
      console.log('logging data from useAuthentication hook onError', JSON.stringify(error));
      navigate('/home');
    }
  });

  return { login: loginMutation, logout: logoutMutation, isLoggingIn, isLoggingOut };
};

export default useAuthentication;
