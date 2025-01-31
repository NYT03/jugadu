import React from "react";
import Upload from "../Components/Upload";
import Header from "./../Components/Header";
import SendButton from "../Components/SendButton";
function Volume() {
  return (
    <div className="bg-gradient-to-t from-[#00c6fb] to-[#005bea] h-[100vh]">
      <Header />
      <main className="flex flex-col justify-center items-center align-middle gap-10">

      <div className="flex flex-row gap-40 justify-center items-center align-middle mt-20">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1>
            <span className="text-3xl mb-4 text-white ">
              Upload the <span className="text-black italic font-medium">In</span> File Here
            </span>
          </h1>
          <Upload />
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <h1>
            <span className="text-3xl mb-4 text-white bf">
              Upload the <span className="text-black font-bold italic">Out</span>  File Here
            </span>
          </h1>
          <Upload />
        </div>
      </div>
      <SendButton />
      </main>
    </div>
  );
}

export default Volume;
