import React, { useState } from "react";
import Row from "./Row";
import { RowLazy } from "./Row";
import "./App.css";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import Footer from "./Footer";
function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      {/*nav bar*/}
      <Nav />
      {/*banner*/}
      <Banner />
      <div className="lazy">
        <Row
          isLargeRow
          title="NETFLIX ORIGINALS"
          fetchURL={requests.fetchNetflixOriginals}
          id="id1"
        />

        <Row title="Trending Now" fetchURL={requests.fetchTrending} id="id2" />

        {/* <div ref={ref}>
        <h2>{`Header inside viewport ${inView}.`}</h2>
      </div> */}

        <Row title="Top Rated" fetchURL={requests.fetchTopRated} id="id3" />

        <Row
          title="Action Movies"
          fetchURL={requests.fetchActionMOvies}
          id="id4"
        />

        <Row
          title="Comedy Movies"
          fetchURL={requests.fetchComedyMovies}
          id="id5"
        />

        <Row
          title="Horror Movies"
          fetchURL={requests.fetchHorrorMovies}
          id="id6"
        />
        <RowLazy
          title="Romance Movies"
          fetchURL={requests.fetchRomanceMovies}
          id="id7"
        />

        <RowLazy
          title="Documentaries"
          fetchURL={requests.fetchDocumentaries}
          id="id8"
        />
      </div>
      {/* {footer} */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
