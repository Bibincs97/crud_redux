import { Paper, Box, Typography, Grid, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CreatePost } from "../Redux/Actions/PostActions";

const CreatePosts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    post_title: "",
    post_message: "",
    post_image: "",
  });
  const { post_title, post_message, post_image } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleFileChange = (e) => {
    setState({ ...state, post_image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    console.log(state);
    e.preventDefault();
    try {
      const payload = { post_title, post_message, post_image };
      dispatch(CreatePost(payload));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      <Paper sx={{ padding: "10px", width: "400px" }} component={"form"}>
        <Typography sx={{ marginBottom: "15px", fontSize: "20px" }}>
          Create Posts
        </Typography>
        <Grid container>
          <Grid items md={12}>
            <TextField
              label="Post Title"
              placeholder="post title"
              sx={{ marginBottom: "15px" }}
              fullWidth
              name="post_title"
              value={post_title}
              onChange={handleChange}
            />
          </Grid>
          <Grid items md={12}>
            <TextField
              label="Post Message"
              placeholder="post message"
              fullWidth
              name="post_message"
              value={post_message}
              onChange={handleChange}
            />
          </Grid>
          <Grid items md={12} marginTop="15px">
            <input type="file" onChange={handleFileChange} />
          </Grid>
          <Grid items md={12} marginTop="15px">
            <Button
              variant="outlined"
              sx={{ dispatch: "flex", justifyContent: "flex-start" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default CreatePosts;
