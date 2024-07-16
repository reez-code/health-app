import PatientNav from "./PatientNav";
import PatientSide from "./PatientSide";
import "../App.css";

function PatientPage() {
  return (
    <>
      <div className="navbar">
        <PatientNav />
      </div>
      <PatientSide />
    </>
  );
}

export default PatientPage;
