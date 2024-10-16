import Image from "next/image";
import Service from "./components/service";

export default function Home() {
  return (
    <>
      <div className="mockup-window bg-base-300">
        <div className="bg-base-200 flex justify-center px-4 sm:px-8 md:px-20 lg:px-40 xl:px-80">
          <Service />
        </div>
      </div>


    </>
  );
}
