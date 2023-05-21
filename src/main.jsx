import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './routes/Routes';
import AuthProviders from './providers/AuthProviders';
import 'react-toastify/dist/ReactToastify.css';
import 'react-tabs/style/react-tabs.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
