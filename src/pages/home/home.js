import Layout from "../../layout/layout";

const dataCard = ["uno", "dops", "tres", "cuantro"];

const Home = () => {
  return (
    <Layout>
      {dataCard.map((data, i) => (
        <div>Card {i}</div>
      ))}
    </Layout>
  );
};

export default Home;
