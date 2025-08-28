import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { DarkModeProvider } from './context/DarkModeContext'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from './services/store'

import GlobalStyles from './styles/GlobalStyles'
import ProtectedRoute from './components/ProtectedRoute'
import SpinnerFullPage from './components/SpinnerFullPage'

import AboutDashboard from './pages/AboutDashboard'
import ProjectsDashboard from './pages/ProjectsDashboard'
import ContactDashboard from './pages/ContactDashboard'
import BlogDashboard from './pages/BlogDashboard'
import { fetchSkills } from './features/Skills/skillSlice'
import { useUser } from './features/authentication/useUser'

const Home = lazy(() => import('./pages/Home'))
const AppLayout = lazy(() => import('./pages/AppLayout'))
const Project = lazy(() => import('./pages/Project'))
const Blog = lazy(() => import('./pages/Blog'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const DashboardLayout = lazy(() => import('./pages/DashboardLayout'))
const Login = lazy(() => import('./pages/Login'))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
})

function App() {
  const { user } = useUser()
  const dispatch = useDispatch()
  const items = useSelector((state) => state.skills.items)
  useEffect(() => {
    if (user?.id) {
      dispatch(fetchSkills(user.id))
    }
  }, [dispatch, user?.id])
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
              <Route path='blog' element={<Blog />} />
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
              <Route path='about' element={<AboutDashboard />} />
              <Route path='projects' element={<ProjectsDashboard />} />
              <Route path='contact' element={<ContactDashboard />} />
              <Route path='blog' element={<BlogDashboard />} />
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
