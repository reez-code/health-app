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

function PatientSide() {
  return (
    <>
      <div style={{ marginTop: "3%" }} className="side-nav">
        <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
          <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
            Hello John Doe
          </CDBSidebarHeader>
          <CDBSidebarContent>
            <CDBSidebarMenu>
              <CDBSidebarMenuItem icon="th-large">
                <Nav.Link href="/admin/doctors">Book an Appoitment</Nav.Link>
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="chart-line" iconType="solid">
                <Nav.Link href="/admin/patients">Appointment Booked</Nav.Link>
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

export default PatientSide;