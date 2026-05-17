"use client";

import { usePathname } from "next/navigation";
import AppHeader from "@/components/home/AppHeader";
import BottomNav from "@/components/app/BottomNav";
import DesktopSidebar from "@/components/app/DesktopSidebar";
import PostHeader from "@/components/app/PostHeader";
import TaskDetailHeader from "@/components/app/TaskDetailHeader";

export default function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isProfile = pathname.startsWith("/home/profile");
  const isPost = pathname.startsWith("/home/post");
  const isTaskDetail = pathname.startsWith("/home/tasks/");
  const isFeed = pathname === "/home";

  const showFeedHeader = isFeed;
  const showPostHeader = isPost;
  const showTaskHeader = isTaskDetail;
  const showProfileDesktopHeader = isProfile;
  const showBottomNav = !isTaskDetail;
  const showSidebar = !isTaskDetail;

  let mainClass = "min-h-dvh bg-[#0A0F1E]";
  if (isTaskDetail) {
    mainClass += " pt-24 pb-12";
  } else if (isPost) {
    mainClass += " pb-32 pt-0 md:pb-0 md:pl-20 lg:pl-60";
  } else if (isProfile) {
    mainClass += " pb-32 pt-8 md:pb-12 md:pl-20 md:pt-24 lg:pl-60";
  } else {
    mainClass += " pb-[100px] pt-16 md:pb-0 md:pl-20 lg:pl-60";
  }

  return (
    <div className={mainClass}>
      {showFeedHeader ? <AppHeader /> : null}
      {showPostHeader ? <PostHeader /> : null}
      {showTaskHeader ? <TaskDetailHeader /> : null}
      {showProfileDesktopHeader ? (
        <header className="glass-header fixed top-0 right-0 left-0 z-50 mx-auto hidden h-16 max-w-7xl items-center justify-between border-b border-white/10 px-4 shadow-sm md:flex">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">location_on</span>
            <span className="font-headline-md text-headline-md font-bold tracking-tight text-primary">
              Omile
            </span>
          </div>
          <button type="button" aria-label="Notifications" className="text-on-surface-variant hover:opacity-80">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </header>
      ) : null}
      {showSidebar ? <DesktopSidebar /> : null}
      {children}
      {showBottomNav ? <BottomNav /> : null}
    </div>
  );
}
