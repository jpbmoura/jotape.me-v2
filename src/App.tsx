import { NavLink } from "react-router-dom";
import { AppRoutes } from "./pages/routes";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Github, Linkedin, Moon, Sun } from "lucide-react";
import React from "react";
import Me from "@/assets/me.svg";

function App() {
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(
    darkThemeMq.matches
  );

  return (
    <>
      <div className="absolute right-4 top-4">
        {isDarkMode ? (
          <Sun
            className="size-6 text-zinc-400 stroke-[1.5] fill-zinc-400 cursor-pointer hover:size-7 transition-all"
            onClick={() => setIsDarkMode(!isDarkMode)}
          />
        ) : (
          <Moon
            className="size-6 text-zinc-400 fill-zinc-400 stroke-[1.5] cursor-pointer hover:size-7 transition-all "
            onClick={() => setIsDarkMode(!isDarkMode)}
          />
        )}
      </div>

      <div
        className={`${
          isDarkMode && "dark"
        } transition-all font-montserrat h-full flex`}
      >
        <div className="h-full bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-200 w-full flex items-center justify-center md:py-40 pt-28 px-4 ">
          <div className="min-h-screen w-full flex flex-col md:max-w-xl max-w-xs justify-center">
            <div className="pb-6 border-b border-zinc-200 dark:border-zinc-700">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-4 items-center ">
                  <Avatar className="size-12 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 dark:from-purple-600 dark:via-purple-400 dark:to-purple-200 animate-gradient bg-300%">
                    <AvatarImage src={Me} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <h1 className="bg-300% font-extrabold text-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 dark:from-purple-600 dark:via-purple-400 dark:to-purple-200 text-transparent bg-clip-text animate-gradient">
                    João Pedro
                  </h1>
                </div>

                <div className="flex flex-row gap-2 items-center">
                  <a href="https://github.com/jpbmoura" target="_blank">
                    <Github className="size-7 stroke-[1.5] hover:stroke-2 transition-all " />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jpbmoura/"
                    target="_blank"
                  >
                    <Linkedin className="size-7 stroke-[1.5] hover:stroke-2 transition-all" />
                  </a>
                </div>
              </div>

              <div className="flex flex-row gap-4 mt-4">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "underline text-cyan-600 dark:text-purple-600 font-bold"
                      : "hover:underline text-zinc-500 hover:text-zinc-700 transition-colors"
                  }
                >
                  Blog
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "underline text-cyan-600 dark:text-purple-600 font-bold"
                      : "hover:underline text-zinc-500 hover:text-zinc-700 transition-colors"
                  }
                >
                  Sobre
                </NavLink>
              </div>
            </div>

            <div className="pt-6 grow">
              <AppRoutes />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
