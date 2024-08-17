import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App.tsx'
import './index.scss'
import { store } from './redux/store.ts'

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<StrictMode>
			<App />
		</StrictMode>
	</Provider>
)
