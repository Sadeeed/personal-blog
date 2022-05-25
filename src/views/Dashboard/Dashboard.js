import { Card, Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import SidebarLeft from "../../components/Sidebar/SidebarLeft";

function Dashboard() {
  let location = useLocation();
  let data = location.state;

  return (
    <div className="container main-container flex on-phone--column extended">
      <SidebarLeft />
      <main className="main full-width">
        <Card className="m-5 bg-nord text-nord-main">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Username</th>
                <th>Password</th>
                <th>Email</th>
                <th>Image</th>
                <th>Age Group</th>
                <th>Gender</th>
                <th>TOC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data.Username}</td>
                <td>{data.Password}</td>
                <td>{data.Email}</td>
                <td>
                  <img src={data.Image} width={16} height={16} alt=""></img>
                  {data.Image}
                </td>
                <td>{data.AgeGroup}</td>
                <td>{data.Gender}</td>
                <td>{data.toc}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        <Footer />
      </main>
    </div>
  );
}

export default Dashboard;
