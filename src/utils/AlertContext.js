import { createContext } from 'react';

const AlertContext = createContext({
	isAlertShown: false,
});

export default AlertContext;
