import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

const CustomErrorBoundary = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
    >
      {children}
    </ErrorBoundary>
  );
};

export default CustomErrorBoundary;