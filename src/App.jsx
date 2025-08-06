import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import IsLoginProvider from "./context/isLoginContex";
function App() {
  return (
    <>
      <IsLoginProvider>
        <ShoppingCartProvider>
          <Header />
          <AppRoutes />
          <Footer />
        </ShoppingCartProvider>
      </IsLoginProvider>
    </>
  );
}

export default App;
