import './App.css';
import {useState, useEffect} from 'react'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import SearchMeal from './SearchMeal/SearchMeal';

function App() {
  const [likeColor, setLikeColor] = useState('')
  const [randomUser, setRandomUsers] = useState({})

  useEffect(() => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setRandomUsers(data.results[0]))
    // .then(data => console.log(data.results[0].gender))
  }, [])

  const handleColor = () => {
    const color = likeColor ? '' : 'primary'
    setLikeColor(color)
  }

  return (
    <div className="App">
      <h1>Random users : {randomUser.name && randomUser.name.title}</h1>
      <h1>Random users : {randomUser.name?.title}</h1>
      <ThumbUpAltIcon onClick={handleColor} color={likeColor}></ThumbUpAltIcon>
      <SearchMeal></SearchMeal>
    </div>
  );
}

export default App;
