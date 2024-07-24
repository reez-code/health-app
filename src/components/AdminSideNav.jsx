import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from "cdbreact";

import "../css/adminSideNav.css";
import Nav from "react-bootstrap/Nav";

function AdminSideNav() {
  return (
    <>
      <div style={{ marginTop: "3%" }} className="side-nav">
        <CDBSidebar textColor="#333" backgroundColor="#f8f9fa">
          <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
            Hello John Doe
          </CDBSidebarHeader>
          <CDBSidebarContent>
            <CDBSidebarMenu>
              <CDBSidebarMenuItem icon="th-large">
                <Nav.Link href="/admin">Doctors</Nav.Link>
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="sticky-note">
                <Nav.Link href="/admin/departments">Departments</Nav.Link>
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="chart-line" iconType="solid">
                <Nav.Link href="/admin/patients">Patients Admitted</Nav.Link>
              </CDBSidebarMenuItem>
            </CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: "center" }}>
            <div
              className="sidebar-btn-wrapper"
              style={{ padding: "20px 5px" }}
            >
              Sidebar Footer
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    </>
  );
}

export default AdminSideNav;
