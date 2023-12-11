import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact--container">
        <h1>Connect with TK Keyboards</h1>
        <p>
          <span>
            TK Keyboards Representative will Respond to Your Requests within
            24hrs (please note that there may be delays during weekends and
            national holidays).
          </span>
        </p>
        <p>support@tkkeyboards.com </p>
        <p>Quick Support Links:</p>
        <ul>
          <li>Order Tracking</li>
          <li>FAQ</li>
          <li>Warranty Terms</li>
        </ul>
        <p>
          <span>Statement:</span>
        </p>
        <p>
          TK Keyboards takes all technical support questions relevant to TK
          Keyboards products.
        </p>
        <p>
          For warranty claim, if the orders were purchased from other authorized
          distributors/platforms (such as Banggood, Drop, Newegg etc), please
          consult the distributors/platforms for RMA process and specific
          warranty terms. If your distributor, however, does not provide
          warranty service, you can report to us by opening a ticket below.
        </p>
      </div>
      <form>
        <div>
          <label>
            Name
            <input type="text" />
          </label>
          <label>
            Email
            <input type="email" />
          </label>
        </div>
        <label>
          Support Type
          <select name="type" id="type">
            <option selected disabled>
              Select
            </option>
            <option value="Technical Support">Technical Support</option>
            <option value="Modify an Order">Modify an Order</option>
            <option value="Shipping Inquiry">Shipping Inquiry</option>
            <option value="Sample Request">Sample Request</option>
            <option value="Technical Support">Others</option>
          </select>
        </label>
        <label>
          Message
          <textarea name="message" id="message" cols="30" rows="3"></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
