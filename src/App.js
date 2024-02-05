import './App.css';
import {Routes,Route} from 'react-router-dom'
import { useState } from 'react';
import MovieList from './MovieList';
import SearchBox from './SearchBox';
import Trailer from './Trailer';
import Welcome from './Welcome';

function App() {
  const[movies,setMovies]= useState([
    {id:1,title:"Divergent",description:"In a world divided into five clans according to their virtues, Tris learns that she is divergent and that she will not join any of the clans. When she uncovers a plot to destroy the Divergents, Tris and the mysterious Four will have to discover what makes the Divergents dangerous before it's too late.",posterUrl:"https://m.media-amazon.com/images/I/61aIZgksRoS._AC_UF894,1000_QL80_.jpg",rating:"6.6",trailer:"https://www.imdb.com/title/tt1840309/"},
    {id:2,title:"Five feet apart",description:"A pair of teenagers with cystic fibrosis meet in a hospital and fall in love, though their disease means they must avoid close physical contact.",posterUrl:"https://m.media-amazon.com/images/I/91peNMyOtEL.jpg",rating:"7.2",trailer:"https://www.imdb.com/title/tt6472976/?ref_=fn_rvi_tt_i_6"},
    {id:3,title:"The maze runner",description:"Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow 'runners' for a shot at escape.",posterUrl:"https://m.media-amazon.com/images/I/51S7srUIWIL._AC_UF1000,1000_QL80_.jpg",rating:"6.2",trailer:"https://www.imdb.com/title/tt1790864/?ref_=fn_rvi_tt_i_6"},
    {id:4,title:"Frozen",description:"When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter.",posterUrl:"https://m.media-amazon.com/images/I/810xrcU7yyL.jpg",rating:"7.4",trailer:"https://www.imdb.com/title/tt2294629/?ref_=fn_rvi_tt_i_2"},
    {id:5,title:"The Silence of the Lambs",description:"A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",posterUrl:"https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,677,1000_AL_.jpg",rating:"8.6",trailer:"https://www.imdb.com/title/tt0102926/"},
    {id:6,title:"Encanto",description:"A Colombian teenage girl has to face the frustration of being the only member of her family without magical powers.",posterUrl:"https://m.media-amazon.com/images/I/91Yxt30M0XL._AC_UF894,1000_QL80_.jpg",rating:"7.2",trailer:"https://www.imdb.com/title/tt2953050/?ref_=fn_rvi_tt_i_3"},
  ])

  const [searchValue, setSearchValue] = useState('');
  const [searchRate, setSearchRate] = useState(1);
  const search=(value)=>{
    setSearchValue(value)
    setSearchRate(value)
  }
  
  const addMovie=(movie)=>{
    setMovies(movies.concat(movie))
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/movieList' element={<div><SearchBox search={search}/>  <MovieList addMovie={addMovie} movies={movies.filter(el=> el.rating>= searchRate || el.title.toLowerCase().includes(searchValue.toLowerCase().trim()))}/></div>}/>
        <Route path='/trailer/:id' element={<Trailer movies={movies}/>}/>
      </Routes>
    </div>
  );
}

export default App;
