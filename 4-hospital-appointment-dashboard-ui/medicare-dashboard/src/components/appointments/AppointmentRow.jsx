import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function AppointmentRow() {
  return (
    <>
      <table className="appointment-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date & Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <p>
              Rakib Hasan
              <span>017110000000</span>
            </p>
          </tr>
          <tr>
            <p>
              Dr. Ayesha Rahman
              <span>Cardiology</span>
            </p>
          </tr>
          <tr>
            <p>
              02 Aug 2026
              <span>10:30 AM</span>
            </p>
          </tr>
          <tr>
            <Badge badgeName="Pending" className="pending-badge" />
            <span>
              <select
                id="change-appointment-status"
                name="change-appointment-status"
              >
                <option value="1">Pending</option>
                <option value="1">Confirmed</option>
                <option value="1">Completed</option>
                <option value="1">Cancelled</option>
              </select>
            </span>
          </tr>
          <tr>
            <Button
              type="button"
              buttonName="Delete"
              className="appointment-list-delete-button"
            />
          </tr>
        </tbody>
      </table>
    </>
  );
}
