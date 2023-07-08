
import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Nav/>
             <Banner/>
            <Row title="NETFLIX ORIGINALS" isLargeRow fetchURL={requests.fetchNetflixOriginals}/>
            <Row title="Trending now" fetchURL={requests.fetchTrending}/>
            <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
            <Row title="Action Movies" fetchURL={requests.fetchAction}/>
            <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
            <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
            <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
