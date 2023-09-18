import React from "react";
import { Link } from "react-router-dom";
import BlogOne from "./BlogOne";

const ReadMe = () => {
  return <Link to="/blog-1" element={<BlogOne/>}>Read Me</Link>;
};

export default ReadMe;
