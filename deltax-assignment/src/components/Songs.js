import { Link } from "react-router-dom";
function Songs() {
  return (
    <div>
      <div id="s">
        <div id="s1">Top four Songs</div>
        <Link id="s3" to="/AddNewSong">
          <div id="s2"><b>+</b>Add Song</div>
        </Link>
      </div>
      <div></div>
    </div>
  );
}
export default Songs;
