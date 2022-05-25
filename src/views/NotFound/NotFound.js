import ErrorCard from "../../components/Card/ErrorCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function NotFound() {
  return (
    <div className="App">
      <Header />
      <ErrorCard title = 'Invalid URL' content = '404 Not Found' />
      <Footer />
    </div>
  );
}

export default NotFound;
