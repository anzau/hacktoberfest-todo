import Footer from "./Footer";

export default function Page({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}