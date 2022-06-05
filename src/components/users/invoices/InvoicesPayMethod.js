import { useContext, useState } from 'react';
import { AuthContext } from '../../hooks/contexts/AuthContext';

import DepositPayment from '../../components/Payments/DepositPayment/DepositModal';
import MovilPayPayment from '../../components/Payments/MovilPay/MovilPayModal';
import ZellePayment from '../../components/Payments/ZellePayments';

import { FormatDecimal } from '../../services/utils/formats';

import {
  // PayButton,
  PayMethodButtons,
  PayMethodButtonsContainer,
  PayMethodContainer,
  PayMethodSummary,
} from './InvoicesPayMethod.Styles';

const InvoicesPayMethod = ({ amountToPay, exchangeRate }) => {
  const { invoices } = useContext(AuthContext);
  const [paymentMethod, setPaymentMethod] = useState('transfer');
  const [showModal, setShowModal] = useState(false);
  const [payments, setPayments] = useState({
    method: 'Transfer',
    amount_USD: 0,
    amount_Bs: 0,
  });

  const invoicesToPay = invoices.filter(
    (invoice) => invoice.invoice_status === 1
  );

  const handlePagarPayPal = async () => {
    // e.preventDefault();
    alert(`Se va a pagar con PayPal`);
    // await InvoicesFinder.paymentsPayPal(1, currentUser, amountToPay);
    // setCurrentUser((user) => {
    //   return { ...user, payment_amount: amountToPay };
    // });
  };

  const handleOnChange = (e) => {
    setPaymentMethod(e.target.value);
    switch (e.target.value) {
      case 'PayPal':
        setPayments({
          method: 'PayPal',
          amount_USD: (amountToPay.Deuda * 1.02).toFixed(2),
          amount_Bs: (amountToPay.Deuda * 1.02).toFixed(2),
        });

        handlePagarPayPal();
        break;

      case 'transfer':
        setShowModal(true);
        e.target.checked = false;
        setPayments({
          method: 'transfer',
          amount_USD: 0,
          amount_Bs: (amountToPay.Deuda * 1.02).toFixed(2),
        });
        break;

      case 'zelle':
        setPayments({
          method: 'zelle',
          amount_USD: (amountToPay.Deuda * 1.02).toFixed(2),
          amount_Bs: (amountToPay.Deuda * 1.02).toFixed(2),
        });
        break;

      case 'pago-movil':
        setShowModal(true);
        setPayments({
          goToPay: true,
          method: 'pago-movil',
          amount_USD: 0,
          amount_Bs: (amountToPay.Deuda * 1.02).toFixed(2),
        });
        break;

      default:
        break;
    }
  };

  return (
    <>
      <PayMethodContainer>
        <PayMethodSummary>
          <div>
            <span className="first-column">Concepto </span>
            <span>Monto US$</span>
            <span>Monto Bs.</span>
            <span>Saldo Bs.</span>
          </div>

          <div>
            <span className="first-column">Subtotal :</span>
            <span>
              {FormatDecimal(amountToPay.MontoUSD + amountToPay.IvaUSD)}
            </span>
            <span>
              {FormatDecimal(amountToPay.IvaBs + amountToPay.MontoBs)}
            </span>
            <span>{FormatDecimal(amountToPay.Deuda)}</span>
          </div>

          <div>
            <span className="first-column">Taq.Virtual 2%:</span>
            <span>
              {FormatDecimal(
                (amountToPay.MontoUSD + amountToPay.IvaUSD) * 0.02
              )}
            </span>
            <span>
              {FormatDecimal((amountToPay.IvaBs + amountToPay.MontoBs) * 0.02)}
            </span>
            <span>{FormatDecimal(amountToPay.Deuda * 0.02)}</span>
          </div>

          <div>
            <span className="first-column">Total :</span>
            <span>
              {FormatDecimal(
                (amountToPay.MontoUSD + amountToPay.IvaUSD) * 1.02
              )}
            </span>
            <span>
              {FormatDecimal((amountToPay.IvaBs + amountToPay.MontoBs) * 1.02)}
            </span>
            <span>{FormatDecimal(amountToPay.Deuda * 1.02)}</span>
          </div>
        </PayMethodSummary>

        <PayMethodButtons>
          <h2> Metodo de Pago</h2>
          <PayMethodButtonsContainer>
            <div>
              <div className="radio-button">
                <input
                  type="radio"
                  id="paypal"
                  value="PayPal"
                  name="payment-method"
                  required
                  onChange={(e) => handleOnChange(e)}
                />
                <label htmlFor="paypal">PayPal</label>
              </div>
            </div>

            <div>
              <div className="radio-button">
                <input
                  type="radio"
                  id="transfer"
                  value="transfer"
                  name="payment-method"
                  required
                  onChange={(e) => handleOnChange(e)}
                />
                <label htmlFor="transfer">Transferencia</label>
              </div>
            </div>

            <div>
              <div className="radio-button">
                <input
                  type="radio"
                  id="zelle"
                  value="zelle"
                  name="payment-method"
                  required
                  onChange={(e) => handleOnChange(e)}
                />
                <label htmlFor="zelle">Zelle</label>
              </div>
            </div>

            <div>
              <div className="radio-button">
                <input
                  type="radio"
                  id="pago-movil"
                  value="pago-movil"
                  name="payment-method"
                  required
                  onChange={(e) => handleOnChange(e)}
                />
                <label htmlFor="pago-movil">Pago movil</label>
              </div>
            </div>
          </PayMethodButtonsContainer>
          {/* <div>
            <PayButton bgClr="var(--saintGreen)" type="submit">
              Pagar
            </PayButton>
          </div> */}
        </PayMethodButtons>
      </PayMethodContainer>

      <div className="pago-container">
        {showModal && payments.method === 'transfer' && (
          <DepositPayment
            invoicesToPay={invoicesToPay}
            amount={payments.amount_Bs}
            show={setShowModal}
          />
        )}
        {showModal && payments.method === 'pago-movil' && (
          <MovilPayPayment
            invoicesToPay={invoicesToPay}
            amount={payments.amount_Bs}
            show={setShowModal}
          />
        )}
        {payments.method === 'zelle' && (
          <ZellePayment
            invoicesToPay={invoicesToPay}
            amount={payments.payment_amount_USD}
          />
        )}
      </div>
    </>
  );
};

export default InvoicesPayMethod;
