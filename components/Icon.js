import Link from "next/link";
import { Tooltip } from "@mantine/core";
import { IconContext } from "react-icons";
import { FaDiscord } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { VscGithubAlt } from "react-icons/vsc";

export default function Icon() {
  return (
    <>
      <div className="grid w-1/3 grid-cols-3 gap-2 my-4 auto-rows-fr">
        <IconContext.Provider value={{ size: "1.5rem" }}>
          <Tooltip
            color="dark"
            withArrow
            position="left"
            transition="fade"
            transitionDuration={200}
            label="Come chat with me on Discord"
            className="inline-block p-2 mx-auto duration-200 rounded-lg shadow-xl bg-slate-800 hover:scale-105"
          >
            <Link href="https://discord.com/users/678790092000854017">
              <a>
                <FaDiscord />
              </a>
            </Link>
          </Tooltip>
          <Tooltip
            color="dark"
            withArrow
            position="bottom"
            transition="fade"
            transitionDuration={200}
            label="View My projects on Github"
            className="inline-block p-2 mx-auto duration-200 rounded-lg shadow-xl bg-slate-800 hover:scale-105"
          >
            <Link href="https://github.com/Vincent-Cayadi">
              <a>
                <VscGithubAlt />
              </a>
            </Link>
          </Tooltip>
          <Tooltip
            color="dark"
            withArrow
            position="right"
            transition="fade"
            transitionDuration={200}
            label="Support Me!"
            className="inline-block p-2 mx-auto duration-200 rounded-lg shadow-xl bg-slate-800 hover:scale-105"
          >
            <FiCoffee />
          </Tooltip>
        </IconContext.Provider>
      </div>
    </>
  );
}
