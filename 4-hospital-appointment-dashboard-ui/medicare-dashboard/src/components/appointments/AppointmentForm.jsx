import Button from "../ui/Button";
import { useState } from "react";

export default function AppointmentForm({ doctors }) {
  const [dateInputType, setDateInputType] = useState("text");
  const [timeInputType, setTimeInputType] = useState("text");

  return (
    <form className="appointment-form">
      <h3 className="appointment-form-title">Book New Appointment</h3>

      <form-group className="fg-patient-name">
        <label htmlFor="patient-name" className="patient-name">
          <span>Patient Name</span>
        </label>
        <input
          type="text"
          id="patient-name"
          name="patient-name"
          placeholder="Enter patient name"
          required
        />
      </form-group>

      <form-group className="fg-phone-number">
        <label htmlFor="phone-number" className="phone-number">
          <span>Phone Number</span>
        </label>
        <input
          type="phone"
          id="phone-number"
          name="phone-number"
          placeholder="017XXXXXXXX"
          required
        />
        <output>Enter a valid 11-digit phone number.</output>
      </form-group>

      <form-group className="fg-doctor">
        <label htmlFor="doctor" className="doctor">
          <span>Doctor</span>
        </label>
        <select id="doctor" name="doctor" required>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.name} • {doctor.department} • {doctor.specialization}
            </option>
          ))}
        </select>
      </form-group>

      <div className="date-time">
        <form-group>
          <label htmlFor="appointment-date" className="appointment-date">
            <span>Date</span>
          </label>
          <input
            type={dateInputType}
            id="appointment-date"
            name="appointment-date"
            placeholder="dd / mm / yyyy"
            required
            onFocus={(e) => setDateInputType("date")}
            onBlur={(e) => {
              if (!e.target.value) {
                setDateInputType("text");
              }
            }}
          />
        </form-group>

        <form-group>
          <label htmlFor="appointment-time" className="appointment-time">
            <span>Time</span>
          </label>
          <input
            type={timeInputType}
            id="appointment-time"
            name="appointment-time"
            placeholder="--:-- --"
            required
            onFocus={(e) => setTimeInputType("time")}
            onBlur={(e) => {
              if (!e.target.value) {
                setTimeInputType("text");
              }
            }}
          />
        </form-group>
      </div>

      <form-group>
        <label htmlFor="note" className="note">
          <span>Note (optional)</span>
        </label>
        <textarea
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

      <form-group className="fg-action-buttons">
        <div className="action-buttons-wrapper">
          <Button
            type="submit"
            className="appointment-form-submit-btn"
            buttonName="Book Appointment"
          />
          <Button
            type="reset"
            className="appointment-form-reset-btn"
            buttonName="Reset"
          />
        </div>
      </form-group>
    </form>
  );
}
