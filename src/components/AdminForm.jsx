import AdminNav from "./AdminNav";
import "../App.css";
import DoctorForm from "./DoctorForm";
function AdminForm() {
  return (
    <>
      <div className="navbar">
        <AdminNav />
      </div>
      <DoctorForm />
    </>
  );
}

export default AdminForm;
