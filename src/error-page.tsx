import { useRouteError } from 'react-router-dom';

interface RouteError {
  statusText?: string;
  message?: string;
  // Add more properties if needed
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message || 'Unknown error'}</i>
      </p>
    </div>
  );
}