import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { store } from './app/store';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ConfigProvider locale={ptBR}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<ToastContainer autoClose={3000} className='toast-container' />
				<App />
			</ThemeProvider>
			</ConfigProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
