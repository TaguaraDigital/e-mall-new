import styles from './contact.module.scss';

import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import logo from '../../assets/image/logos/emall.png';

// import GoogleMaps from "../GoogleMap/GoogleMaps";

const ContactAddress = ({ data }) => {
  return (
    <div className={styles.address}>
      <div className={styles.info}>
        <div>
          <img src={logo} alt="Emall Logo" className={styles.logo} />
          <img
            src={data.flag}
            alt={`${data.country} flag`}
            className={styles.flag}
          />
        </div>
        <h2>{data.title}</h2>
        <p>
          <b> {data.subtitle}</b>
          <br />
          <b> Representante :</b> {data.representative}
          <br />
          <b>Dirección :</b> {data.address}
          <br />
          <b>
            <FaPhone />
          </b>{' '}
          {data.phone}
          <br />
          <b>
            <FaEnvelope />
          </b>{' '}
          {data.email}
          <br />
        </p>
        {data.whaptsapp ? (
          <p>
            <b>
              <FaWhatsapp /> :
            </b>
            {data.whaptsapp}
          </p>
        ) : (
          ''
        )}
      </div>

      <div>
        <h1>Aqui va GoogleMap</h1>
      </div>
      {/* <ContactMap>
        <GoogleMaps location={data.location} />
      </ContactMap> */}
    </div>
  );
};

export default ContactAddress;
