import React from "react";
import "./Support.scss";

const Support = () => {
  return (
    <div className="support">
      <div className="support--container">
        <h1>Technical Support</h1>
        <p>
          Experiencing issues with your keyboard? At KeyboardTech, we're here to
          assist you in resolving any technical issues you may be facing with
          your keyboard. Please complete the form below, and our technical
          support team will get back to you as soon as possible.
        </p>
        <h2>Instructions:</h2>
        <ul>
          <li>
            Provide detailed information about the issue for faster assistance.
          </li>
          <li>
            Attach relevant images or files that may help us better understand
            the problem.
          </li>
        </ul>
        <h2>Support Hours:</h2>
        <ul>
          <li>Monday to Friday: 9:00 am - 6:00 pm (Pacific Standard Time)</li>
        </ul>
        <p>
          <span>Note: </span>If your issue is urgent, we recommend checking our
          Frequently Asked Questions (FAQ) section while waiting for the
          technical support response.
        </p>
        <p>Frequently Asked Questions (FAQ)</p>
        <p>
          We've compiled the most frequently asked questions to provide quick
          answers to common user issues. If you don't find the answer you're
          looking for, feel free to reach out to our technical support team!
        </p>
        <h2>1. My keyboard is not responding. What should I do?</h2>
        <ul>
          <li>Ensure the cable is properly connected.</li>
          <li>Try connecting the keyboard to another USB port.</li>
          <li>If the issue persists, contact our technical support.</li>
        </ul>
        <h2>2. How can I update my keyboard firmware?</h2>
        <ul>
          <li>Visit the Downloads and Updates section on our website.</li>
          <li>
            Follow the detailed instructions to perform the firmware update.
          </li>
        </ul>
        <h2>3. Issues with keys: some are not working correctly.</h2>
        <ul>
          <li>Gently clean the keys using compressed air.</li>
          <li>
            If the issue persists, contact our technical support team for
            further assistance.
          </li>
        </ul>
        <p>
          We are here to ensure you get the most out of your keyboard
          experience. Thank you for choosing Tk Keyboards!
        </p>
      </div>
    </div>
  );
};

export default Support;
