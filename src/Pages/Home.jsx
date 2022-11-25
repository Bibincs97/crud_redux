import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { DeletePost, FetchPosts } from "../Redux/Actions/PostActions";

const Home = () => {
  const dispatch = useDispatch();
  const POSTS = useSelector((state) => state.PostReducer.items);
  console.log(POSTS);
  useEffect(() => {
    dispatch(FetchPosts());
  }, [dispatch]);

  const deletePosts = (id) => {
    dispatch(DeletePost(id));
    dispatch(FetchPosts());
  };

  return (
    <Container maxWidth="xl" sx={{ marginTop: "30px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {POSTS &&
          POSTS.map((post) => {
            return (
              <Card
                key={post.id}
                sx={{
                  width: "300px",
                  margin: "20px 20px 0px 0px",
                  padding: "13px 14px 0px 14px",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={post.post_image}
                  alt="post_image"
                />
                <CardContent sx={{ padding: "6px 0px" }}>
                  <Typography
                    sx={{
                      fontSize: 18,
                      paddingBottom: "10px",
                      fontWeight: 500,
                    }}
                  >
                    {post.post_title}
                  </Typography>
                  <Typography sx={{ fontSize: 15 }} color="text.secondary">
                    {post.post_message}
                  </Typography>
                </CardContent>
                <CardActions sx={{ padding: "6px 0px" }}>
                  <Button size="small" variant="outlined">
                    <Link
                      to={`/editPost/${post.id}`}
                      style={{
                        textDecoration: "none",
                        color: "rgb(13 122 235)",
                      }}
                    >
                      Edit
                    </Link>
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => deletePosts(post.id)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            );
          })}
      </Box>
    </Container>
  );
};

export default Home;
