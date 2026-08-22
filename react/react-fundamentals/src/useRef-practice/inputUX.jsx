import { useEffect, useRef } from "react";

const UseRef = () => {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  useEffect(() => {
    emailRef.current.focus();
  }, []);
  return (
    <div className="m-2 flex flex-col gap-1">
      <input
        type="email"
        placeholder="email"
        ref={emailRef}
        className="border rounded p-2"
      />
      <input
        type="password"
        placeholder="password"
        ref={passRef}
        className="border rounded p-2"
      />
      <button
        onClick={() => {
          if (emailRef.current.value === "") {
            emailRef.current.focus();
          } else passRef.current.focus();
        }}
        className="rounded p-2 bg-blue-500 text-white"
      >
        Login
      </button>
    </div>
  );
};

export default UseRef;

// import { useRef } from "react";

// const VideoPlayer = () => {
//   const videoRef = useRef(null);

//   const handlePlay = () => {
//     videoRef.current.play(); // Direct DOM method call kiya
//   };

//   const handlePause = () => {
//     videoRef.current.pause(); // Direct DOM method call kiya
//   };

//   return (
//     <div className="p-4 border m-4">
//       <video
//         ref={videoRef}
//         width="300"
//         src="https://www.w3schools.com/html/mov_bbb.mp4"
//       />
//       <div className="mt-2 flex gap-2">
//         <button
//           onClick={handlePlay}
//           className="bg-green-600 text-white px-3 py-1 rounded"
//         >
//           Play
//         </button>
//         <button
//           onClick={handlePause}
//           className="bg-red-600 text-white px-3 py-1 rounded"
//         >
//           Pause
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;
