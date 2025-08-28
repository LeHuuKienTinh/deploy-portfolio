import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { DarkModeProvider } from './context/DarkModeContext'

import GlobalStyles from './styles/GlobalStyles'
import ProtectedRoute from './components/ProtectedRoute'
import SpinnerFullPage from './components/SpinnerFullPage'

const Home = lazy(() => import('./pages/Home'))
const AppLayout = lazy(() => import('./pages/AppLayout'))
const Project = lazy(() => import('./pages/Project'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))

const Login = lazy(() => import('./pages/Login'))

const DashboardLayout = lazy(() => import('./pages/DashboardLayout'))
const AboutDashboard = lazy(() => import('./pages/AboutDashboard'))
const ProjectsDashboard = lazy(() => import('./pages/ProjectsDashboard'))
const ContactDashboard = lazy(() => import('./pages/ContactDashboard'))

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Suspense fallback={<SpinnerFullPage />}>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to='/home' />} />
              <Route path='/home' element={<Home />} />
              <Route path='projects' element={<Project />} />
              <Route path='contact' element={<Contact />} />
              <Route path='about' element={<About />} />
            </Route>
            <Route
              path='dashboard'
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to='about' />} />
              <Route path='about' element={<AboutDashboard />} />
              <Route path='projects' element={<ProjectsDashboard />} />
              <Route path='contact' element={<ContactDashboard />} />
            </Route>
            <Route path='login' element={<Login />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Toaster
        position='top-center'
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-700)',
          },
        }}
      />
    </DarkModeProvider>
  )
}

export default App
