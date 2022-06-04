import React from 'react';
import './sidebar.scss';

const ShipmentSidebar = () => {
  return (
    <div className="shipment_sidebar">
      <form>
        <div>
          <label htmlFor="texarea"> Shipment Number</label>
          <textarea name="textarea" id="textarea" rows="10"></textarea>
        </div>
        <div>
          <p>Status</p>
          <div className="flex">
            <input
              className="checkbox"
              name="status"
              id="auto"
              value="status[]"
              type="radio"
            />
            <label htmlFor="auto">Auto Tendered</label>
          </div>
          <div className="flex">
            <input
              className="checkbox"
              name="status"
              id="closed"
              value="status[]"
              type="radio"
            />
            <label htmlFor="closed">Closed</label>
          </div>
          <div className="flex">
            <input
              className="checkbox"
              name="status"
              id="bol"
              value="status[]"
              type="radio"
            />
            <label htmlFor="bol">BOL</label>
          </div>
        </div>
        <div>
          <label>Ship Date</label>
          <input type="date" />
        </div>
        <div>
          <label>Create Date</label>
          <input type="date" />
        </div>

        <div className="flex-column">
          <label htmlFor="shipment_term">Shipment Term</label>
          <select name="shipment_term" id="shipment_term">
            <option value=""> Select term</option>
            <option value="prepaid"> Prepaid</option>
            <option value="cash"> Cash</option>
            <option value="credit"> Credit</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default ShipmentSidebar;
