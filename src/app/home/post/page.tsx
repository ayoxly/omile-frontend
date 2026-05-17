import type { Metadata } from "next";
import PostTaskForm from "./PostTaskForm";

export const metadata: Metadata = {
  title: "Post a Task — Omile",
};

export default function PostTaskPage() {
  return <PostTaskForm />;
}
