import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18next'
import vi from './assets/i18n/vi.json'
import en from './assets/i18n/en.json'
const root = ReactDOM.createRoot(document.getElementById('root'))
i18n.init({
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  resources: {
    en: {
      translation: en
    },
    vi: {
      translation: vi
    }
  }
})
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
)
