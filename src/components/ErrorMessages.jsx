const ErrorMessages = ({ errors, name }) => {
  return (
    errors?.[name] &&
    errors[name].map((error, index) => {
      return (
        <p className="text-red-500 text-xs italic" key={index}>
          {error}
        </p>
      );
    })
  );
};

export default ErrorMessages;
