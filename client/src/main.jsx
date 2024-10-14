import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CustomThemeProvider } from './config/themeContext.jsx';

createRoot(document.getElementById('root')).render(
  <CustomThemeProvider>
    <App />
  </CustomThemeProvider>,
)
