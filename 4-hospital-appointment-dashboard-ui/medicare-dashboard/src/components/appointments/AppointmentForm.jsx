import Button from "../ui/Button";

export default function AppointmentForm() {
  return (
    <form className="appointment-form">
      <h3 className="appointment-form-title">Book New Appointment</h3>

      <form-group>
        <label htmlFor="patient-name" className="patient-name">
          <span>Patient Name</span>
        </label>
        <input type="text" id="patient-name" name="patient-name" />
      </form-group>

      <form-group>
        <label htmlFor="phone-number" className="phone-number">
          <span>Phone Number</span>
        </label>
        <input type="phone" id="phone-number" name="phone-number" />
        <output>Enter a valid 11-digit phone number.</output>
      </form-group>

      <form-group>
        <label htmlFor="doctor" className="doctor">
          <span>Doctor</span>
        </label>
        <select id="doctor" name="doctor">
          <option value="1">Dr. Ayesha Rahman - Cardiology</option>
          <option value="1">Dr. Ayesha Rahman - Cardiology</option>
          <option value="1">Dr. Ayesha Rahman - Cardiology</option>
          <option value="1">Dr. Ayesha Rahman - Cardiology</option>
          <option value="1">Dr. Ayesha Rahman - Cardiology</option>
        </select>
      </form-group>

      <div className="date-time">
        <form-group>
          <label htmlFor="appointment-date" className="appointment-date">
            <span>Date</span>
          </label>
          <input type="date" id="appointment-date" name="appointment-date" />
        </form-group>

        <form-group>
          <label htmlFor="appointment-time" className="appointment-time">
            <span>Time</span>
          </label>
          <input type="date" id="appointment-time" name="appointment-time" />
        </form-group>
      </div>

      <form-group>
        <label htmlFor="note" className="note">
          <span>Note (optional)</span>
        </label>
        <input
          type="text"
          id="note"
          name="note"
          placeholder="Write a short note... (max 200 characters)"
        />
      </form-group>

      <form-group>
        <label htmlFor="report-file" className="report-file">
          <span>Report File (optional)</span>
        </label>
        <input type="file" id="report-file" name="report-file" />
      </form-group>

      <form-group className="form-action-buttons">
        <div className="action-buttons-wrapper">
          <Button
            type="submit"
            className="book-appointment-btn"
            buttonName="Book Appointment"
          />
          <Button className="appointment-reset-btn" buttonName="Reset" />
        </div>
      </form-group>
    </form>
  );
}
