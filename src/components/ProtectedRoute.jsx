import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import LoadingFullPage from './LoadingFullPage'

import { useUser } from '../features/authentication/useUser'

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate()

  const { isPending, isAuthenticated } = useUser()

  useEffect(
    function () {
      if (!isAuthenticated && !isPending) navigate('/login')
    },
    [isAuthenticated, isPending, navigate]
  )

  if (isAuthenticated)
    return <LoadingFullPage isLoading={isPending}>{children}</LoadingFullPage>
}
