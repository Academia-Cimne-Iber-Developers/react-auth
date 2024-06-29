import Login from "./components/Auth/Login";
import Profile from "./components/Auth/Profile";

function App() {
    switch (window.location.pathname) {
        case "/login":
            return <Login />;
        case "/profile":
            return <Profile />;
        default:
            return <Login />;
    }
}

export default App;
