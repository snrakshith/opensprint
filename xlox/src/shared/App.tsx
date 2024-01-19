import { AuthForm } from "../pages/auth/auth-form";
import { Toaster } from "../components/ui/toaster";
import { Dashboard } from "../pages/dashboard";

/**
 * The App function returns a JSX element that renders a LoginForm component and a Toaster component.
 * @returns The App component is returning a JSX element. The JSX element is a div element with a
 * className attribute set to an empty string. Inside the div, there are two components being rendered:
 * LoginForm and Toaster.
 */
function App() {
  const userLogged = false;
  return (
    <div className="w-full h-screen flex">
      {userLogged && (
        <>
          {/* <div className="w-6/12 bg-white" />
          <div className="w-6/12 h-screen flex justify-center items-center bg-black"> */}
          <AuthForm />
          {/* </div> */}
        </>
      )}
      <Dashboard />
      <Toaster />
    </div>
  );
}

export default App;
