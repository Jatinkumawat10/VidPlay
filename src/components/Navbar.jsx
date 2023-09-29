import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import {  Typography } from "@mui/material";

import { logo } from "../utils/constants";
import { SearchBar } from "./";
import { useNavigate } from "react-router-dom"

  const Navbar = () => {
    const navigate = useNavigate();
    return (
      <Stack onClick={() => navigate("/")} direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>

          <img src={logo} alt="logo" height={45} />
          <Typography className="copyright" variant="body2" sx={{ mx: 1, color: "#fff", fontSize: 20 }}>
            VidPlay
          </Typography>
        </Link>
        <SearchBar />
      </Stack>

    );
  };

export default Navbar;
