import About from "./About";
const Home = (props) => {
  const Home = ({name})
  const handleclick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <h1>Name : {props.name}</h1>
      <button onClick={handleclick}>Go to about page</button>
      <About name={name}/>
      <About name={name}/>
      <About name={name}/>

    </div>
  );
};

export default Home;