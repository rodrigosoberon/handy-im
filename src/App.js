import styles from "./App.module.css";
import Navbar from "./components/UI/Navbar/Navbar";
import Footer from "./components/UI/Footer/Footer";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <p>Handy IM</p>
      <Footer />
    </div>
  );
}

export default App;
