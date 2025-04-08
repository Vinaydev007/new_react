import logo from './logo.svg';
import './App.css';
import MovieCard from "./component/MovieCard"
function App() {
  let product=[{
    title:"car",
    desc:"car is a four wheel vehicle",
    price:10000,
    model:"xuv"
  },{
    title:"bike",
    desc:"bike is a two wheel vehicle",
    price:50000,
    model:"rx100"
  },{
    title:"ship",
    desc:"no desc",
    price:100000,
    model:"large"
  }]
  return (
    product.map((item)=>{
     return <MovieCard props={item}/>
    }));

  }
export default App;
