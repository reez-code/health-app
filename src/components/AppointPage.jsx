import PatientNav from "./PatientNav";
import PatientSide from "./PatientSide";
import "../App.css";
import PatientAppoint from "./PatientAppoint";

function AppointPage() {
  return (
    <>
      <div className="navbar">
        <PatientNav />
      </div>
      <PatientSide />
      <PatientAppoint />
    </>
  );
}

export default AppointPage;
