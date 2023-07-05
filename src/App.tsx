import AllRoutes from "./routes/Routes"
import AuthProvider from "./context/AuthContext";
import { AppDiv } from "./styles/appCSS/AppCSS"

function App() {
  return (
    <AuthProvider>
      <AppDiv>
        <AllRoutes />
      </AppDiv>
    </AuthProvider>
  );
}

export default App;