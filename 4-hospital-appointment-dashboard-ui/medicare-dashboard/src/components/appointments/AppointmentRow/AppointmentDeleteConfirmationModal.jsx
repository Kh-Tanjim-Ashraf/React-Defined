import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import { timeFormat } from "../../../utils/format";

export default function AppointmentDeleteConfirmationModal({
  className,
  appointment,
  handleCloseConfirmationModalDeleteAppointment,
  handleAppointmentDelete,
  ref,
}) {
  return (
    <Modal className="appointment-delete-confirmation-modal" ref={ref}>
      {appointment ? (
        <>
          <h2>Delete Appointment?</h2>
          <p>You are about to delete the following appointment:</p>
          <p>
            <strong>Appointment Id:</strong> {appointment.id}
          </p>
          <p>
            <strong>Patient Name:</strong> {appointment.patientName}
          </p>
          <p>
            <strong>Date:</strong> {appointment.date}
          </p>
          <p>
            <strong>Time:</strong> {timeFormat(appointment.time)}
          </p>
          <p>
            <strong>Status:</strong> {appointment.status}
          </p>
          <Button
            type="button"
            className="appointment-record-delete-btn"
            onClick={(e) => handleAppointmentDelete(appointment.id)}
            buttonName="Delete"
          />
          <Button
            type="button"
            className="appointment-record-delete-modal-close-btn"
            onClick={handleCloseConfirmationModalDeleteAppointment}
            buttonName="Close"
          />
        </>
      ) : (
        <h2>No appointment found!</h2>
      )}
    </Modal>
  );
}
