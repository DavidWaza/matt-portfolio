import React, { useState, useEffect, ReactNode, PropsWithChildren } from 'react';

type ErrorBoundaryProps = {
  children: ReactNode;
};

export function useErrorBoundary(): [Error | null, () => void] {
  const [error, setError] = useState<Error | null>(null);

  const resetError = () => {
    setError(null);
  };

  useEffect(() => {
    const errorHandler = (event: ErrorEvent) => {
      setError(new Error(event.message));
    };

    window.addEventListener('error', errorHandler);

    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  return [error, resetError];
}

export function ErrorBoundary({ children }: PropsWithChildren<ErrorBoundaryProps>) {
  const [error, resetError] = useErrorBoundary();

  if (error) {
    return (
      <>
        <h1>Something went wrong.</h1>
        <button onClick={resetError}>Retry</button>
      </>
    );
  }

  return <>{children}</>;
}
