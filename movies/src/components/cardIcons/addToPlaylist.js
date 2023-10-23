import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import PlayListAddIcon from "@mui/icons-material/PlaylistAdd";

const AddToPlayListIcon = ({ movie }) => {
  return (
    <IconButton aria-label="add to playlist">
      <PlayListAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlayListIcon;