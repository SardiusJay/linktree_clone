/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.scss";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Profile />
      <section className="links">
        <a target="_blank" id="twitter" href="https://twitter.com/Signs_WISDOM" rel="noreferrer">
          Twitter Link
        </a>
        <a target="_blank" id="btn__zuri" href="https://training.zuri.team/" rel="noreferrer">
          Zuri Team
        </a>
        <a target="_blank" id="books" href="http://books.zuri.team/" rel="noreferrer">
          Zuri Books
        </a>
        <a
          target="_blank"
          id="book__python"
          href="https://books.zuri.team/python-for-beginners?ref_id=signs" rel="noreferrer"
        >
          Python Books
        </a>
        <a target="_blank" id="pitch" href="https://background.zuri.team/" rel="noreferrer">
          Background Check for Coders
        </a>
        <a
          target="_blank"
          id="book__design"
          href="https://books.zuri.team/design-rules" rel="noreferrer"
        >
          Design Books
        </a>
        <div className="icons">
          <a href="">
            <img src="assets/slack_logo.svg" alt="slack icon" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <img src="assets/github_icon.svg" alt="github icon" />
          </a>
        </div>
      </section>
      <footer>
        <div className="content">
          <img src="assets/zuri.svg" alt="zuri logo" />
          <p>HNG Internship 9 Frontend Task</p>
          <img src="assets/ig.svg" alt="I4G logo" />
        </div>
      </footer>
    </div>
  );
}

export default App;
