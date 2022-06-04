import {
  FaHome,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
  FaUserAlt,
  FaUserEdit,
} from 'react-icons/fa';
import { GrContactInfo } from 'react-icons/gr';
import { BsCardChecklist } from 'react-icons/bs';
export const headerData = {
  landing: [
    {
      id: 'landing-01',
      title: 'Inicio',
      path: './',
      cName: 'single',
      icon: <FaHome />,
    },
    {
      id: 'landing-02',
      title: 'Contacto',
      path: 'contact',
      cName: 'scroll',
      icon: <GrContactInfo />,
    },
    {
      id: 'landing-03',
      title: 'Ingresar',
      path: './login',
      cName: 'single',
      icon: <FaSignInAlt />,
    },
  ],
  login: [
    {
      id: 'login-01',
      title: 'Inicio',
      path: './',
      cName: 'single',
      icon: <FaHome />,
    },
  ],
  adminHome: [
    {
      id: 'admin-01',
      title: 'Inicio',
      path: './home',
      cName: 'single',
      icon: <FaHome />,
    },
    {
      id: 'admin-02',
      title: 'Pagos X Confirmar',
      path: './invoicetoconfirm',
      cName: 'single',
      icon: <BsCardChecklist />,
    },
    {
      id: 'admin-03',
      title: 'Pagos Confirmados',
      path: './paymentconfirm',
      cName: 'single',
      icon: <BsCardChecklist />,
    },
  ],
  userHome: [
    {
      id: 'user-01',
      title: 'Inicio',
      path: './home',
      cName: 'single',
      icon: <FaHome />,
    },
    {
      id: 'user-02',
      title: 'Pagar Recibos',
      path: './payinvoices',
      cName: 'single',
      icon: <BsCardChecklist />,
    },
    {
      id: 'user-03',
      title: 'Estado de Cuenta',
      path: './statements',
      cName: 'single',
      icon: <BsCardChecklist />,
    },
    {
      id: 'user-04',
      title: 'Actualizar Datos',
      path: './user',
      cName: 'single',
      icon: <FaUserEdit />,
    },
    {
      id: 'user-05',
      title: 'Contacto',
      path: 'contact',
      cName: 'scroll',
      icon: <GrContactInfo />,
    },
    {
      id: 'user-06',
      title: 'Logout',
      path: './logout',
      cName: 'single',
      icon: <FaSignOutAlt />,
    },
  ],
};
