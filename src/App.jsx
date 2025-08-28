import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { DarkModeProvider } from './context/DarkModeContext'

import GlobalStyles from './styles/GlobalStyles'
import ProtectedRoute from './components/ProtectedRoute'
import SpinnerFullPage from './components/SpinnerFullPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from './store/store'

const AppLayout = lazy(() => import('./pages/public/AppLayout'))
const Home = lazy(() => import('./pages/public/Home'))
const Project = lazy(() => import('./pages/public/Project'))
const About = lazy(() => import('./pages/public/About'))
const Contact = lazy(() => import('./pages/public/Contact'))

const Login = lazy(() => import('./pages/public/Login'))

const DashboardLayout = lazy(() => import('./pages/private/DashboardLayout'))
const AboutDashboard = lazy(() => import('./pages/private/AboutDashboard'))
const ProjectsDashboard = lazy(() =>
  import('./pages/private/ProjectsDashboard')
)
const ContactDashboard = lazy(() => import('./pages/private/ContactDashboard'))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
})
function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
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
        </Provider>
      </QueryClientProvider>
    </DarkModeProvider>
  )
}

export default App
