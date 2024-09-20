import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/reactjs.png" width={200} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.png" width={200} />
            <div>
              <h5>CS4980</h5>
              <p className="wd-dashboard-course-title">Intro to JavaScript</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">  
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
          <img src="/images/reactjs.png" width={200} />
          <div>
            <h5>CS6589 Intro to Python</h5>
            <p className="wd-dashboard-course-title">Python Developer</p>
          </div>          
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
          <img src="/images/reactjs.png" width={200}/>
          <div>
            <h5>CS 2510</h5>
            <p>Java Programming</p>
          </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
          <img src="/images/reactjs.png" width={200}/>
          <div>
            <h5>CS 3500</h5>
            <p>Object Oriented Design</p>
          </div>
          </Link>
        </div>
        <div>
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
          <img src="/images/reactjs.png" width={200}/>
          <div>
            <h5>CS 3650</h5>
            <p>Computer Systems</p>
          </div>
          </Link>
        </div>
        <div>
          <Link to="/Kanbas/Courses/1234/Home" className="wd-dashboard-course-link">
          <img src="/images/reactjs.png" width={200}/>
          <div>
            <h5>CS 3000</h5>
            <p>Algorithms and Data</p>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
