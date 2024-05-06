import * as React from "react";
import backgroundImage from "../../shared/assets/kidsImage.jpg";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import CircularProgress from "@mui/joy/CircularProgress";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import { IoIosGitPullRequest } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Space, Table, Tag } from "antd";
import healthcare from "../../shared/assets/healthcare.png";
import Donors from "../../shared/assets/donors.png";

const OrgHome = () => {
  const navigate = useNavigate();

  // Dummy donation data
  const donations = [
    {
      name: "John Doe",
      email: "john@example.com",
      donationType: "Educational teaching",
      donationDate: new Date(),
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      donationType: "Book",
      donationDate: new Date(),
    },
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      donationType: "Book",
      donationDate: new Date(),
    },
    // Add more dummy donation objects as needed
  ];

  const getCurrentDate = () => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date().toLocaleDateString("en-US", options);
  };

  const dataa = donations.map((donation, index) => ({
    key: index,
    name: donation.name,
    email: donation.email,
    donationType: donation.donationType,
    donationDate: donation.donationDate.toLocaleDateString(),
  }));

  const columns = [
    {
      title: <Typography className="text-center">Name</Typography>,
      dataIndex: "name",
      key: "name",
      render: (name) => <Typography className="text-center">{name}</Typography>,
    },
    {
      title: <Typography className="text-center">Email</Typography>,
      dataIndex: "email",
      key: "email",
      render: (email) => (
        <Typography className="text-center">{email}</Typography>
      ),
    },
    {
      title: <Typography className="text-center">Donation Type</Typography>,
      dataIndex: "donationType",
      key: "donationType",
      render: (donationType) => (
        <Typography className="text-center">{donationType}</Typography>
      ),
    },
    {
      title: <Typography className="text-center">Donation Date</Typography>,
      dataIndex: "donationDate",
      key: "donationDate",
      render: (donationDate) => (
        <Typography className="text-center">{donationDate}</Typography>
      ),
    },
  ];

  return (
    <div
      className="relative flex flex-col items-center min-h-screen object-scale-down"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      ></div>

      <div className="flex justify-center mt-5 mb-5">
        <div className="w-80 ml-5">
          <Card
            variant="solid"
            color="white"
            text="black"
            style={{ backgroundColor: "white", color: "black" }}
          >
            <CardContent orientation="horizontal">
              <div className="mt-5">
                <CircularProgress size="lg" determinate value={60}>
                  <img
                    src={healthcare}
                    className="img-fluid"
                    alt="patient"
                    style={{ color: "black", width: "40px", height: "auto" }}
                  />
                </CircularProgress>
              </div>
              <CardContent>
                <Typography level="body-md">Total Donations</Typography>
                <Typography level="h2">160</Typography>
                <Typography level="body-md">{getCurrentDate()}</Typography>
              </CardContent>
            </CardContent>
          </Card>
        </div>

        {/* Vertical divider */}
        <div className="border-l border-gray-300 h-full mx-5"></div>

        <div className="w-80">
          <Card
            variant="solid"
            color="white"
            text="black"
            style={{ backgroundColor: "white", color: "black" }}
          >
            <CardContent orientation="horizontal">
              <div className="mt-5">
                <CircularProgress size="lg" determinate value={40}>
                  <img
                    src={Donors}
                    className="img-fluid"
                    alt="patient"
                    style={{ color: "black", width: "40px", height: "auto" }}
                  />
                </CircularProgress>
              </div>
              <CardContent>
                <Typography level="body-md">Total Donors</Typography>
                <Typography level="h2">85</Typography>
                <Typography level="body-md">{getCurrentDate()}</Typography>
              </CardContent>
            </CardContent>
          </Card>
        </div>

        {/* Vertical divider */}
        <div className="border-l border-gray-300 h-full mx-5"></div>

        <div className="w-80">
          <Card
            variant="solid"
            color="white"
            text="black"
            style={{ backgroundColor: "white", color: "black" }}
          >
            <CardContent orientation="horizontal">
              <div className="mt-5">
                <CircularProgress size="lg" determinate value={20}>
                  <IoIosGitPullRequest
                    className="w-7 h-7"
                    style={{ color: "black" }}
                  />
                </CircularProgress>
              </div>
              <CardContent>
                <Typography level="body-md">Donation Requests</Typography>
                <Typography level="h2">70</Typography>
                <Typography level="body-md">{getCurrentDate()}</Typography>
              </CardContent>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="w-10/12 ml-5 mt-10 rounded-xl">
        <Table columns={columns} dataSource={dataa} />
      </div>
    </div>
  );
};

export default OrgHome;
