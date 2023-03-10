const SignUp = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = {
    name: [
      {
        required: true,
        message: "Name is required.",
      },
    ],
    email: [
      {
        required: true,
        message: "Email is required.",
      },
      {
        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address. Check your spelling!",
      },
    ],
    password: [
      {
        required: true,
        message: "Password is required.",
      },
      {
        min: 8,
        message: "Password should be at least 8 characters.",
      },
      {
        validator: (value) => {
          if (value === "password") {
            return Promise.reject("Please choose a more secure password."); 
          }
          return Promise.resolve();
        },
      },
    ],
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="John Doe"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="john@example.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="**********"
            name="password"
          />
        </div>
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          typeof="submit"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;