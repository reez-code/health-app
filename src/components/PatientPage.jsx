import PatientNav from "./PatientNav";
import PatientSide from "./PatientSide";
import "../App.css";
import Appointment from "./Appointment";

function PatientPage() {
  return (
    <>
      <div className="navbar">
        <PatientNav />
      </div>
      <PatientSide />
      <Appointment />
    </>
  );
}

export default PatientPage;
