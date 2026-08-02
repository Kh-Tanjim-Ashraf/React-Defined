import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function AppointmentRow() {
  return (
    <div className="appointment-table-container">
      <table className="appointment-table">
        <thead>
          <tr className="table-header-row">
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date & Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Sample Data */}
          <tr className="table-body-row">
            <td className="table-data-name">
              Rakib Hasan
              <span>017110000000</span>
            </td>
            <td>
              Dr. Ayesha Rahman
              <span>Cardiology</span>
            </td>
            <td>
              02 Aug 2026
              <span>10:30 AM</span>
            </td>
            <td className="table-data-status">
              <Badge badgeName="Pending" className="pending-badge" />
              <select
                id="change-appointment-status"
                name="change-appointment-status"
                className="change-appointment-status"
              >
                <option value="">Change</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </td>
            <td className="table-data-action">
              <Button
                type="button"
                buttonName="Delete"
                className="appointment-list-delete-button"
              />
            </td>
          </tr>
          <tr className="table-body-row">
            <td className="table-data-name">
              Rakib Hasan
              <span>017110000000</span>
            </td>
            <td>
              Dr. Ayesha Rahman
              <span>Cardiology</span>
            </td>
            <td>
              02 Aug 2026
              <span>10:30 AM</span>
            </td>
            <td className="table-data-status">
              <Badge badgeName="Pending" className="pending-badge" />
              <select
                id="change-appointment-status"
                name="change-appointment-status"
                className="change-appointment-status"
              >
                <option value="">Change</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </td>
            <td className="table-data-action">
              <Button
                type="button"
                buttonName="Delete"
                className="appointment-list-delete-button"
              />
            </td>
          </tr>
          <tr className="table-body-row">
            <td className="table-data-name">
              Rakib Hasan
              <span>017110000000</span>
            </td>
            <td>
              Dr. Ayesha Rahman
              <span>Cardiology</span>
            </td>
            <td>
              02 Aug 2026
              <span>10:30 AM</span>
            </td>
            <td className="table-data-status">
              <Badge badgeName="Pending" className="pending-badge" />
              <select
                id="change-appointment-status"
                name="change-appointment-status"
                className="change-appointment-status"
              >
                <option value="">Change</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </td>
            <td className="table-data-action">
              <Button
                type="button"
                buttonName="Delete"
                className="appointment-list-delete-button"
              />
            </td>
          </tr>
          <tr className="table-body-row">
            <td className="table-data-name">
              Rakib Hasan
              <span>017110000000</span>
            </td>
            <td>
              Dr. Ayesha Rahman
              <span>Cardiology</span>
            </td>
            <td>
              02 Aug 2026
              <span>10:30 AM</span>
            </td>
            <td className="table-data-status">
              <Badge badgeName="Pending" className="pending-badge" />
              <select
                id="change-appointment-status"
                name="change-appointment-status"
                className="change-appointment-status"
              >
                <option value="">Change</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </td>
            <td className="table-data-action">
              <Button
                type="button"
                buttonName="Delete"
                className="appointment-list-delete-button"
              />
            </td>
          </tr>
          <tr className="table-body-row">
            <td className="table-data-name">
              Rakib Hasan
              <span>017110000000</span>
            </td>
            <td>
              Dr. Ayesha Rahman
              <span>Cardiology</span>
            </td>
            <td>
              02 Aug 2026
              <span>10:30 AM</span>
            </td>
            <td className="table-data-status">
              <Badge badgeName="Pending" className="pending-badge" />
              <select
                id="change-appointment-status"
                name="change-appointment-status"
                className="change-appointment-status"
              >
                <option value="">Change</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </td>
            <td className="table-data-action">
              <Button
                type="button"
                buttonName="Delete"
                className="appointment-list-delete-button"
              />
            </td>
          </tr>
          <tr className="table-body-row">
            <td className="table-data-name">
              Rakib Hasan
              <span>017110000000</span>
            </td>
            <td>
              Dr. Ayesha Rahman
              <span>Cardiology</span>
            </td>
            <td>
              02 Aug 2026
              <span>10:30 AM</span>
            </td>
            <td className="table-data-status">
              <Badge badgeName="Pending" className="pending-badge" />
              <select
                id="change-appointment-status"
                name="change-appointment-status"
                className="change-appointment-status"
              >
                <option value="">Change</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </td>
            <td className="table-data-action">
              <Button
                type="button"
                buttonName="Delete"
                className="appointment-list-delete-button"
              />
            </td>
          </tr>
          <tr className="table-body-row">
            <td className="table-data-name">
              Rakib Hasan
              <span>017110000000</span>
            </td>
            <td>
              Dr. Ayesha Rahman
              <span>Cardiology</span>
            </td>
            <td>
              02 Aug 2026
              <span>10:30 AM</span>
            </td>
            <td className="table-data-status">
              <Badge badgeName="Pending" className="pending-badge" />
              <select
                id="change-appointment-status"
                name="change-appointment-status"
                className="change-appointment-status"
              >
                <option value="">Change</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </td>
            <td className="table-data-action">
              <Button
                type="button"
                buttonName="Delete"
                className="appointment-list-delete-button"
              />
            </td>
          </tr>
          <tr className="table-body-row">
            <td className="table-data-name">
              Rakib Hasan
              <span>017110000000</span>
            </td>
            <td>
              Dr. Ayesha Rahman
              <span>Cardiology</span>
            </td>
            <td>
              02 Aug 2026
              <span>10:30 AM</span>
            </td>
            <td className="table-data-status">
              <Badge badgeName="Pending" className="pending-badge" />
              <select
                id="change-appointment-status"
                name="change-appointment-status"
                className="change-appointment-status"
              >
                <option value="">Change</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </td>
            <td className="table-data-action">
              <Button
                type="button"
                buttonName="Delete"
                className="appointment-list-delete-button"
              />
            </td>
          </tr>
          <tr className="table-body-row">
            <td className="table-data-name">
              Rakib Hasan
              <span>017110000000</span>
            </td>
            <td>
              Dr. Ayesha Rahman
              <span>Cardiology</span>
            </td>
            <td>
              02 Aug 2026
              <span>10:30 AM</span>
            </td>
            <td className="table-data-status">
              <Badge badgeName="Pending" className="pending-badge" />
              <select
                id="change-appointment-status"
                name="change-appointment-status"
                className="change-appointment-status"
              >
                <option value="">Change</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </td>
            <td className="table-data-action">
              <Button
                type="button"
                buttonName="Delete"
                className="appointment-list-delete-button"
              />
            </td>
          </tr>
          <tr className="table-body-row">
            <td className="table-data-name">
              Rakib Hasan
              <span>017110000000</span>
            </td>
            <td>
              Dr. Ayesha Rahman
              <span>Cardiology</span>
            </td>
            <td>
              02 Aug 2026
              <span>10:30 AM</span>
            </td>
            <td className="table-data-status">
              <Badge badgeName="Pending" className="pending-badge" />
              <select
                id="change-appointment-status"
                name="change-appointment-status"
                className="change-appointment-status"
              >
                <option value="">Change</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </td>
            <td className="table-data-action">
              <Button
                type="button"
                buttonName="Delete"
                className="appointment-list-delete-button"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
