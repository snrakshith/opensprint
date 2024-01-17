import { LoginForm } from "./pages/auth/LoginForm";
import { Toaster } from "./components/ui/toaster";

/**
 * The App function returns a JSX element that renders a LoginForm component and a Toaster component.
 * @returns The App component is returning a JSX element. The JSX element is a div element with a
 * className attribute set to an empty string. Inside the div, there are two components being rendered:
 * LoginForm and Toaster.
 */
function App() {
  return (
    <div className="w-full h-screen">
      <div className="h-screen flex justify-center items-center bg-black">
        <LoginForm />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
