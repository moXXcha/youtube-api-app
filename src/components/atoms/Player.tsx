import React from "react";

export const Player = () => {
  return (
    <div>
      <iframe
        id="player"
        width={923}
        height={475}
        src={"https://www.youtube.com/watch?v=S4vM2nkEHmw"}
        allowFullScreen
      />
    </div>
  );
};
