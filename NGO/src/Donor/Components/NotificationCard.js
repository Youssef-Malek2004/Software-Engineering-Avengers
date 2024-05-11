import {
  CircularProgress,
  Typography,
  Card,
  CardContent,
  Avatar,
  Box,
  Divider,
} from "@mui/joy";

export default function NotificationCard({ content, formattedDate, sender }) {
  let title = (
    <Typography level="title-lg" id="card-description">
      {" "}
      Driver Arrival
    </Typography>
  );

  let avatar = <Avatar size="md"> {sender.username.charAt(0)}</Avatar>;

  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        width: "100%",
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
        },
        marginTop: 4,
      }}
    >
      <CardContent>
        <Box className="flex justify-between">
          <Box className="flex space-x-4">
            {avatar}

            <Box className="mr-10">
              {title}
              <Box className="">
                <Typography
                  level="body-md"
                  aria-describedby="card-description"
                  mb={1}
                >
                  {content}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ marginBottom: 0.5 }} />

        <Box className="w-full flex justify-end">
          <Typography level="body-md" aria-describedby="card-description">
            {formattedDate}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
