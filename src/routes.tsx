import { createBrowserRouter } from 'react-router-dom'

import { NotFound } from './pages/404'
import { AppLayout } from './pages/_layouts/app'
import { HomePage } from './pages/app/home'

import { PetsFound } from './pages/app/petsfound'

import { PetSubscriptionDonePage } from './pages/app/cadastro-concluido'
import { RegisterPet } from './pages/app/register-pet'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/cadastrar-pet',
        element: <RegisterPet />,
      },
      {
        path: '/pets-encontrados',
        element: <PetsFound />,
        path: '/cadastro-pet-concluido',
        element: <PetSubscriptionDonePage />,
      },
    ],
  },
])
