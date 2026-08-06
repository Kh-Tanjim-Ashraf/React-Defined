import { useState } from "react";
import Badge from "../../ui/Badge";
import Button from "../../ui/Button";
import { timeFormat } from "../../../utils/format";

export default function SingleAppointmentRow({
  doctorName,
  doctorDepartment,
  appointment,
  handleAppointmentStatus,
  handleOpenConfirmationModalDeleteAppointment,
}) {
  const [appointmentStatus, setAppointmentStatus] = useState("Change");

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
        <span>{timeFormat(appointment.time)}</span>
      </td>
      <td className="table-data-status">
        <Badge
          badgeName={appointment.status}
          className={`badge ${appointment.status.toLowerCase()}-badge`}
        />
        <select
          name="change-appointment-status"
          className="change-appointment-status"
          value={appointmentStatus}
          onChange={(e) => {
            setAppointmentStatus(e.target.value);
            handleAppointmentStatus(appointment.id, e.target.value);
          }}
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
          onClick={(e) =>
            handleOpenConfirmationModalDeleteAppointment(appointment.id)
          }
        />
      </td>
    </tr>
  );
}
