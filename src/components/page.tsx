import { forwardRef, ReactNode } from "react";
import { Box, BoxProps } from "@mui/material";
import { Helmet } from "react-helmet-async";

interface PageProps extends BoxProps {
  children: ReactNode;
  title?: string;
}

const Page = forwardRef<HTMLDivElement, PageProps>(
  ({ children, title = "", ...other }, ref) => (
    <Box ref={ref} {...other}>
      <Helmet titleTemplate={title} defaultTitle="Rick and Morty">
        <meta name="description" content="Rick and Morty" />
      </Helmet>
      {children}
    </Box>
  )
);

export default Page;
