import { useState } from "react";
import Badge from "../../ui/Badge";
import Button from "../../ui/Button";

export default function SingleAppointmentRow({
  doctorName,
  doctorDepartment,
  appointment,
}) {
  const [appointmentStatus, setAppointmentStatus] = useState(
    appointment.status || "Pending",
  );

  return (
    <tr key={appointment.id} className="table-body-row">
      <td className="table-data-name">
        {appointment.patientName}
        <span>{appointment.phone}</span>
      </td>
      <td>
        {doctorName}
        <span>{doctorDepartment}</span>
      </td>
      <td>
        {appointment.date}
        <span>
          {(() => {
            const date = new Date();

            date.setHours(
              parseInt(appointment.time.split(":")[0]),
              parseInt(appointment.time.split(":")[1]),
            );

            return date.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            });
          })()}
        </span>
      </td>
      <td className="table-data-status">
        <Badge
          badgeName={appointmentStatus}
          className={`badge ${appointmentStatus.toLowerCase()}-badge`}
        />
        <select
          name="change-appointment-status"
          className="change-appointment-status"
          value={appointmentStatus}
          onChange={(e) => setAppointmentStatus(e.target.value)}
        >
          <option value="">Change</option>
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
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
  );
}
