
import Header from '../components/Header'; // Adjust the path as necessary
import Footer from '../components/Footer'; // Adjust the path as necessary

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;