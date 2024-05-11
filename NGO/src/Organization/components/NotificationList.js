import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/joy/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import { Typography as JoyTypography } from "@mui/joy";

export default function NotificationList({ notifications }) {
  const navigate = useNavigate();

  const content = notifications.map((notification, index) => {
    let avatar = <Avatar size="md"> {notification.sender.charAt(0)}</Avatar>;

    let title = (
      <Typography level="title-lg" id="card-description">
        {" "}
        New Notification
      </Typography>
    );

    if (index > 4) return;

    return (
      <>
        <ListItem
          alignItems="flex-start"
          key={index}
          className="group/item hover:bg-slate-100 cursor-pointer rounded-lg"
          onClick={() => {
            navigate("notifications/");
          }}
        >
          {/* {index !== 0 ? <Divider/>: null} */}
          <ListItemAvatar> {avatar} </ListItemAvatar>
          <ListItemText
            primary={title}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {notification.sender}
                </Typography>
                {` - ${notification.content}`}
              </React.Fragment>
            }
          />
        </ListItem>
        {notifications.length > 1 && <Divider sx={{ opacity: "50%" }} />}
      </>
    );
  });
  return (
    <div>
      <JoyTypography level="h4">Notifications</JoyTypography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {/* <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
      */}

        {content}
      </List>
      <div
        className="flex justify-end cursor-pointer"
        onClick={() => {
          navigate("notifications/");
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {" "}
          View All Notifications
        </Typography>
      </div>
    </div>
  );
}
