import { useNavigate } from 'react-router';

export default function ERROR_404() {
  let navigate = useNavigate();
  function handleClick() {
    navigate(-1)
  }
  return (
    <div>
      <h1>Nothing to see here!</h1>
      <p>
        {/* <button onClick={() => (window.location.href = "/")}> */}
        <button onClick={() => ( handleClick())}>
          Click here to reload the app
        </button>
      </p>
    </div>
  );
}