import ErrorComponent from './ErrorComponent'
import Spinner from './Spinner'
import SpinnerFullPage from './SpinnerFullPage'

function LoadingComponent({ children, isLoading, error = null }) {
  if (isLoading) {
    return <SpinnerFullPage />
  }

  if (error) {
    return <ErrorComponent message={error.message} />
  }

  return children
}
export default LoadingComponent
