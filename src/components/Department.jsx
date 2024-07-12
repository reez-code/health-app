import { Col, Row } from "react-bootstrap";
import "../css/department.css";
function Department() {
  return (
    <Row xs={1} md={2} className="g-4" style={{ "--mdb-gutter-x": "-20.5rem" }}>
      {Array.from({ length: 10 }).map((_, idx) => (
        <Col key={idx}>
          <div class="ag-courses_item">
            <a class="ag-courses-item_link" href="#">
              <div class="ag-courses-item_bg"></div>
              <div class="ag-courses-item_title">Department: Pharmacy</div>
              <div class="ag-courses-item_date-box">
                Number of Doctors:
                <span class="ag-courses-item_date"> 14</span>
              </div>
            </a>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Department;
