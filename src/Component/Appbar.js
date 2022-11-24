import { Drawer } from "@mui/material";

const AppBar = async () => {
  return (
    <>
      <Drawer
        anchor="left"
        variant="permanent"
        elevation={5}
        PaperProps={{
          sx: {
            width: 100,
          },
        }}
      />
    </>
  );
};

export default AppBar;
