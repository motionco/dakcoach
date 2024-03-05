import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";
import sanitizeHtml from 'sanitize-html';

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const post = await Post.findById(id);

    // post의 필드를 클리닝
    post.title = sanitizeHtml(post.title);
    post.desc = sanitizeHtml(post.desc);
    post.img = sanitizeHtml(post.img);
    post.content = sanitizeHtml(post.content);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    await Post.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
