import "../App.css";
import AdminNav from "./AdminNav";
import AdminSideNav from "./AdminSideNav";

function AdminPage() {
  return (
    <>
      <div className="navbar">
        <AdminNav />
      </div>
      <AdminSideNav />
    </>
  );
}

export default AdminPage;
