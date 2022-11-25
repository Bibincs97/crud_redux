import { Paper, Box, Typography, Grid, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { EditPost, GetPosts } from "../Redux/Actions/PostActions";

const EditPosts = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const POSTS = useSelector((state) => state.PostReducer.updateId);
  useEffect(() => {
    dispatch(GetPosts(id));
    setState({
      post_id: POSTS.id,
      post_title: POSTS.post_title,
      post_message: POSTS.post_message,
    });
  }, [POSTS.id]);
  const navigate = useNavigate();
  const [state, setState] = useState({
    post_title: "",
    post_message: "",
  });
  const { post_title, post_message } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const payload = { post_title, post_message };
      dispatch(EditPost(id, payload));
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
          Update Posts
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
            <Button variant="contained" component="label">
              Upload File
              <input type="file" hidden />
            </Button>
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

export default EditPosts;
