import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
    unique: true,
  },
  content: {
    type: String,
    required: [true, "Provide Content"],
  },
  categoryId: String,
  email: {
    type: String,
    required: [true, "Please login"],
  },
  userId: {
    type: String,
    required: [true, "Please login"],
  },
  coverphoto:{
    type: String,
    required: [true, "Please login"],
  },
  tags: [String],
  comments: [commentSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Blog = mongoose.models.Blog || mongoose.model('Blog1', blogSchema);

export default Blog;
