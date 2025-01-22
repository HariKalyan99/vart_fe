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
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
