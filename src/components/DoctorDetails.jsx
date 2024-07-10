import "../css/doctorDetails.css";
function DoctorDetails() {
  return (
    <>
      <article className="card">
        <div className="card-img">
          <div className="card-imgs pv delete"></div>
        </div>

        <div className="project-info">
          <div className="flex">
            <div className="project-title">Title card</div>
            <span className="tag">type</span>
          </div>
          <span className="lighter">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae voluptas ullam aut incidunt minima.
          </span>
        </div>
      </article>
    </>
  );
}

export default DoctorDetails;
