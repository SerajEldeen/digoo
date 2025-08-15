"use client";
import { LineWave } from "react-loader-spinner";
function loading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
      <LineWave
        visible={true}
        height={200}
        width={200}
        color="#8B5E3C"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor="#8B5E3C"
        middleLineColor="#a97d4d"
        lastLineColor="#6e4e1f"
      />
    </div>
  );
}

export default loading;
