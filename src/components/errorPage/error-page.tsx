import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import './error-page.scss';

export default function ErrorPage() {
  const error = useRouteError();

  const errorMessage = isRouteErrorResponse(error)
    ? error.error?.message || error.statusText
    : error instanceof Error
    ? error.message
    : typeof error === 'string'
    ? error
    : 'Unknown error';

  console.error(error);

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}
