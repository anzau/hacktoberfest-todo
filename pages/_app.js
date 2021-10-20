import "tailwindcss/tailwind.css";
import './index.css';
import Page from '../Components/Page';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  )
}

export default MyApp;
