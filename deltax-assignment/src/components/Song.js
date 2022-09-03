import { React,  useState } from "react";
import { AiFillStar } from "react-icons/ai";
const colors = {
  red: "#dd464d",
  white: "#ededed",
};
function Song(props) {
  const stars = Array(5).fill(0);
  const [Value, setValue] = useState(0);
  const [Hober, setHober] = useState(undefined);
  console.log(stars);
  const handleClick = (value) => {
    setValue(value);
  };

  const handleHober = (value) => {
    setHober(value);
  };

 

  return (
    <div>
      <div id="songsname">
        <div id="imgcontrol">
          <img class="img12" src={props.Artwork}></img>
        </div>
        <div id="song-control">{props.song}</div>
        <div id="song-control">{props.dateOfRelease}</div>
        <div id="song-control">{props.Artist}</div>
        <div class="starstyle">
          {stars.map((_, index) => {
            return (
              <AiFillStar
                key={index}
                color={
                  (Hober || Value) > index
                    ? colors.red
                    : colors.white
                }
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleHober(index + 1)}
              />
            );
          })}
          
        </div>
      </div>
    </div>
  );
}
export default Song;
