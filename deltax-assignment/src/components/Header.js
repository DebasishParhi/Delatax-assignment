import { AiOutlineSearch } from "react-icons/ai";
function Header() {
  return (
    <div class="nav"style={{backgroundColor:"rgb(168,157,158)" }} >
      <div class="home" style={{backgroundColor:"rgb(168,157,158)", color:"white"}}>Home</div>
      <div class="search">
        <input
          type="text"
          placeholder="search"
          name="search"
          className="search-input"
        ></input>
        <div id="icon">
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  );
}
export default Header;
