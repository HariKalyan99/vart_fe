import { Box, Typography, Paper } from "@mui/material";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

export default function FooterBar({ create, details }) {
  return (
    <Box
      className={`relative isolate overflow-hidden ${create && "bg-chestnut"} ${
        !create && !details && "bg-saffron"
      } ${details && "bg-chestnut"}`}
      py={12}
      mt="4rem"
    >
      <Box className="mx-auto max-w-7xl px-6 lg:px-8">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          <Box sx={{ maxWidth: { lg: "50%" } }}>
            <Typography
              variant="h4"
              component="h2"
              color="white"
              fontWeight="bold"
            >
              Subscribe to our newsletter
            </Typography>
            <Typography variant="body1" color="white" mt={4}>
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
              velit quis. Duis tempor incididunt dolore.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 4,
              maxWidth: { lg: "50%" },
            }}
          >
            <span className="text-white text-base fot-bold">Contributors:</span>
            <span className="inline-block"> 🐨🐯🦁🐮🐷🐽🐸🐵🙈🙉🙊🐒🐔🐧🐦🐤🐣🐥🦆🦅🦉🦇🐺🐗🐴🦄🐝🐛🦋🐌🐞🐜🦟🦗🕷🕸🦂🐢🐍🦎🦖🦕🐙🦑🦐🦞🦀🐡🐠🐟🐬🐳🐋🦈🐊🐅🐆🦓🦍🐘🦛🦏🐪🐫🦒🦘🐃🐂🐄🐎🐖🐏🐑🦙🐐🦌🐕🐩🐈🐓🦃🦚🦜🦢🕊🐇🦝🦡🐁🐀🐿🦔</span>
            {/* <Paper
              sx={{
                p: 2,
                backgroundColor: "rgba(0,0,0, 0.05)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  borderRadius: "8px",
                  p: 1,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <CalendarDaysIcon
                  className="text-white"
                  style={{ fontSize: 24 }}
                />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography variant="h6" color="white">
                  Weekly articles
                </Typography>
                <Typography variant="body2" color="white">
                  Non laboris consequat cupidatat laborum magna. Eiusmod non
                  irure cupidatat duis commodo amet.
                </Typography>
              </Box>
            </Paper>

            <Paper
              sx={{
                p: 2,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  borderRadius: "8px",
                  p: 1,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <HandRaisedIcon
                  className="text-white"
                  style={{ fontSize: 24 }}
                />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography variant="h6" color="white">
                  No spam
                </Typography>
                <Typography variant="body2" color="white">
                  Officia excepteur ullamco ut sint duis proident non
                  adipisicing. Voluptate incididunt anim.
                </Typography>
              </Box>
            </Paper> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
