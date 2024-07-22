import "../App.css";
import AdminNav from "./AdminNav";
import AdminSideNav from "./AdminSideNav";
import Doctor from "./Doctor";
function AdminPage() {
  return (
    <>
      <div className="navbar">
        <AdminNav />
      </div>
      <AdminSideNav />
      <Doctor />
    </>
  );
}

export default AdminPage;
