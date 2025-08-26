import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AppLayout from './pages/AppLayout'
import Project from './pages/Project'
import Blog from './pages/Blog'
import About from './pages/About'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import GlobalStyles from './styles/GlobalStyles'
import { Toaster } from 'react-hot-toast'
import { Suspense } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { DarkModeProvider } from './context/DarkModeContext'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './pages/Dashboard'

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
        <GlobalStyles />
        <BrowserRouter>
          <Suspense fallback={'Loading...'}>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to='/home' />} />
                <Route path='/home' element={<Home />} />
                <Route path='projects' element={<Project />} />
                <Route path='skills' element={<Skills />} />
                <Route path='blog' element={<Blog />} />
                <Route path='contact' element={<Contact />} />
                <Route path='about' element={<About />} />
              </Route>
              <Route
                path='dashboard'
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
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
      </QueryClientProvider>
    </DarkModeProvider>
  )
}

export default App
