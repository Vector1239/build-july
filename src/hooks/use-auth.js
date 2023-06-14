import { useContext } from 'react';
import { AuthContext } from 'src/contexts/auth-context';

export const useAuth = () => useContext(AuthContext);
export const logSomething = () => console.log('something');
