
import SignUp from './components/SignUp';

const App = () => {
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <SignUp />
      </div>
    </div>
  );
};

export default App;
