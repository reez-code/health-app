import { Row } from "react-bootstrap";
import "../css/department.css";
function Department() {
  return (
    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <div key={idx}>
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
        </div>
      ))}
    </Row>
  );
}

export default Department;
