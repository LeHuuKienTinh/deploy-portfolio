import ErrorComponent from './ErrorComponent'
import SpinnerFullPage from './SpinnerFullPage'

function LoadingFullPage({ children, isLoading, error = null }) {
  if (isLoading) {
    return <SpinnerFullPage />
  }

  if (error) {
    return <ErrorComponent message={error.message} />
  }

  return children
}
export default LoadingFullPage
