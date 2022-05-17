import Navbar from "../components/Nav";
import WebDevCard from "../components/WebDevCard";
import RoboCard from "../components/RoboCard";

export default function Experience() {
  return (
    <>
      <Navbar />
      <div className="w-1/2 m-auto mt-10">
        <div className="p-6 m-4">
          <h1 className="text-xl text-white underline underline-offset-2">
            Web Development
          </h1>
          <p className="my-4 text-white">
            Web Dev is fun. I like to make and replicate Websites
          </p>
          <WebDevCard />
        </div>
        <div className="p-6 m-4">
          <h1 className="my-4 text-xl text-white underline underline-offset-2">
            Robotics Engineer
          </h1>
          <RoboCard />
        </div>
      </div>
    </>
  );
}
