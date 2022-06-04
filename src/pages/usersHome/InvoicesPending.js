import { useContext } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import InvoicesPending from "../../components/invoices/Pending";
import { AuthContext } from "../../hooks/contexts/AuthContext";
import ContactSection from "../../components/layout/ContactSection";

const Invoice = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <Header page="home" />
      <h1 className="title-center">Deuda Actual de {currentUser.name}</h1>
      <InvoicesPending />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Invoice;
