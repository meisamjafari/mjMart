import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Header />
        <AppRoutes />
        <Footer />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
