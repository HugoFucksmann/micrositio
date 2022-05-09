import Landing from "./landing/landing";
import Layout from "./layout/layout";
import "./pages/home/home.css";
const dataCard = ["uno", "dops", "tres", "cuantro"];

function App() {
  return (
    <Layout landing={<Landing />}>
      <div class="wrapper">
        <div class="one">One</div>
        <div class="two">Two</div>
        <div class="three">Three</div>
        <div class="four">Four</div>
        <div class="five">Five</div>
        <div class="six">Six</div>
      </div>
    </Layout>
  );
}

export default App;
