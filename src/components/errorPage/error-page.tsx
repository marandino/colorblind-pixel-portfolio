import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import './error-page.scss';

const getErrorMessage = (error: unknown): string => {
  if (isRouteErrorResponse(error)) {
    return error.error?.message || error.statusText;
  }
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === 'string') {
    return error;
  }
  return 'Unknown error';
};

export default function ErrorPage() {
  const error = useRouteError();
  const errorMessage = getErrorMessage(error);

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
