import { Route, Routes } from "react-router-dom";
import Discover from "./pages/Discover.jsx";
import TopArtists from "./pages/TopArtists";
import TopCharts from "./pages/TopCharts";
import AroundYour from "./pages/AroundYou";
import ArtistDetails from "./pages/ArtistDetails";
import SongDetails from "./pages/SongDetails";
import Search from "./pages/Search";
import Sidebar from "./components/Sidebar.jsx";
import SearchBar from "./components/SearchBar.jsx";
import TopChartsCard from "./components/TopChartsCard.jsx";
import TopArtistsCard from "./components/TopArtictsCard.jsx";
import SongPlayer from "./components/SongPlayer.jsx";

function App() {
  return (
    <>
      <div className=" max-h-[100vh] w-screen flex flex-col-reverse sm:flex-row ">
        <div className=" w-screen h-[8vh]  bg-gray-800 flex items-center sm:items-start sm:h-screen sm:w-[16%] md:w-[20%] xl:w-[16%]">
          <Sidebar />
        </div>
        <div className="max-h-[92vh] overflow-y-scroll sm:max-h-screen sm:w-[84%] sm:over lg:flex lg:w-[80%] xl:w-[84%]">
          <div className="  w-screen  min-h-[100vh] sm:w-[100%]  lg:w-[65%]">
            <div className="w-screen h-16  sm:w-[100%] ">
              <SearchBar />
            </div>
            <div>
              <Routes>
                <Route path="/" element={<Discover />}></Route>
                <Route path="/top-artists" element={<TopArtists />}></Route>
                <Route path="/top-charts" element={<TopCharts />}></Route>
                <Route path="/around-you" element={<AroundYour />}></Route>
                <Route path="/artist/:id" element={<ArtistDetails />}></Route>
                <Route path="/songs/:songid" element={<SongDetails />}></Route>
                <Route path="/search/:searchParam" element={<Search />}></Route>
              </Routes>
            </div>
          </div>
          <div className="text-white text-4xl   md:h-screen lg:w-[35%]  hidden lg:block ">
            <div>
              <div className="w-100 lg:h-[70vh]  py-3 ">
                <h1 className="font-semibold text-3xl p-2">Top Charts</h1>
                <div className=" w-100 h-[92%] overflow-y-auto px-1 scrollbar-hide  ">
                  <TopChartsCard />
                  <TopChartsCard />
                  <TopChartsCard />
                  <TopChartsCard />
                  <TopChartsCard />
                  <TopChartsCard />
                </div>
              </div>
              <div className="w-100 lg:h-[30vh] ">
                <h1 className="font-semibold text-3xl px-2 py-1">
                  Top Artists
                </h1>
                <div className="w-full h-[80%] flex flex-wrap  overflow-y-auto px-1 scrollbar-hide">
                  <TopArtistsCard />
                  <TopArtistsCard />
                  <TopArtistsCard />
                  <TopArtistsCard />
                  <TopArtistsCard />
                  <TopArtistsCard />
                  <TopArtistsCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-20 bg-slate-900/95  fixed bottom-0 right-0  rounded-t-3xl max-sm:bottom-14 ">
        <SongPlayer />
      </div>
    </>
  );
}

export default App;
