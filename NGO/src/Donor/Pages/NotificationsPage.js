import { CircularProgress, Typography, Divider, Box } from "@mui/joy";
import { BiBell } from "react-icons/bi";
import { PiBellDuotone } from "react-icons/pi";
import Chip from "@mui/joy/Chip";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import NotificationCard from "../Components/NotificationCard";
import { useState } from "react";
import dayjs from "dayjs";

export default function DonorNotifications() {
  let notifications;
  const currentURL = window.location.href;
  notifications = [
    {
      id: 1,
      sender: { username: "Smith" },
      content:
        "The driver has arrived to pick up Clothing. 5 items ready for pickup.",
      formattedDate: "May 10- 2024",
    },
    {
      id: 2,
      sender: { username: "Doctor Brown" },
      content:
        "The driver has arrived to pick up Toys. 8 items ready for pickup.",
      formattedDate: "May 14 - 2024",
    },
    {
      id: 3,
      sender: { username: "John Doe" },
      content:
        "The driver has arrived to pick up Food. 4 items ready for pickup.",
      formattedDate: "May 13 - 2024",
    },
    {
      id: 4,
      sender: { username: "Jane Smith" },
      content:
        "The driver has arrived to pick up Clothing. 5 items ready for pickup.",
      formattedDate: "May 11 - 2024",
    },
    {
      id: 5,
      sender: { username: "Emily Johnson" },
      content:
        "The driver has arrived to pick up Clothing. 5 items ready for pickup.",
      formattedDate: "May 12 - 2024",
    },
    {
      id: 6,
      sender: { username: "Mark Davis" },
      content:
        "The driver has arrived to pick up Books. 5 items ready for pickup.",
      formattedDate: "May 15 - 2024",
    },
    {
      id: 7,
      sender: { username: "Alex White" },
      content:
        "The driver has arrived to pick up Pens. 5 items ready for pickup.",
      formattedDate: "May 16 - 2024",
    },
    {
      id: 8,
      sender: { username: "Sarah Taylor" },
      content:
        "The driver has arrived to pick up Clothing. 5 items ready for pickup.",
      formattedDate: "May 17 - 2024",
    },
    {
      id: 9,
      sender: { username: "Michael Brown" },
      content:
        "The driver has arrived to pick up Clothing. 5 items ready for pickup.",
      formattedDate: "May 18 - 2024",
    },
    {
      id: 10,
      sender: { username: "Olivia Martinez" },
      content:
        "The driver has arrived to pick up Food. 5 items ready for pickup.",
      formattedDate: "May 19 - 2024",
    },
  ];

  const [index, setIndex] = useState(0);

  const content = notifications.map((notification) => {
    return <NotificationCard {...notification} />;
  });

  let todayContent = notifications.filter((notification) => {
    const notificationDate = dayjs(notification.formattedDate, {
      format: "MM/DD/YYYY",
    });
    const today = dayjs();
    return notificationDate.isSame(today, "day");
  });

  todayContent = todayContent.map((notification) => {
    return (
      <NotificationCard
        {...notification}
        formattedDate={notification.formattedDate}
      />
    );
  });

  if (todayContent.length === 0) {
    todayContent = (
      <Box className="flex flex-col items-center mt-20 space-y-8">
        <Chip
          size="lg"
          variant="soft"
          color="neutral"
          sx={{ "--Chip-radius": "100px" }}
        >
          <PiBellDuotone fontSize={100} className="rounded" />
        </Chip>
        <Typography level="h4" color="neutral">
          No New Notifications
        </Typography>
      </Box>
    );
  }

  return (
    <div className="ml-14 mt-4 mb-96 mr-14">
      <Typography level="h2" gutterBottom endDecorator={<BiBell />}>
        Notifications
      </Typography>

      {/* <Divider/> */}

      {/* TABS */}

      <Tabs
        aria-label="Pipeline"
        value={index}
        onChange={(event, value) => setIndex(value)}
        sx={{ backgroundColor: "transparent" }}
      >
        <TabList
          sx={{
            pt: 1,
            [`&& .${tabClasses.root}`]: {
              flex: "initial",
              bgcolor: "transparent",
              "&:hover": {
                bgcolor: "transparent",
              },
              [`&.${tabClasses.selected}`]: {
                color: "primary.plainColor",
                "&::after": {
                  height: 2,
                  borderTopLeftRadius: 3,
                  borderTopRightRadius: 3,
                  bgcolor: "primary.500",
                },
              },
            },
          }}
        >
          <Tab indicatorInset>
            Today{" "}
            {todayContent.length > 0 && (
              <Chip
                size="sm"
                variant="soft"
                color={index === 0 ? "primary" : "neutral"}
              >
                {todayContent.length}
              </Chip>
            )}
          </Tab>
          <Tab indicatorInset>
            All{" "}
            <Chip
              size="sm"
              variant="soft"
              color={index === 1 ? "primary" : "neutral"}
            >
              {notifications.length}
            </Chip>
          </Tab>
        </TabList>

        {/* <TabPanel value={0}>will show today's notif</TabPanel>
            <TabPanel value={1}>all notifs</TabPanel> */}
      </Tabs>

      {index === 1 ? content : todayContent}
    </div>
  );
}
