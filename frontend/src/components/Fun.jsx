import React, {useState, useEffect} from 'react';
import {Card, CardBody, Input, Button, Slider, CardHeader, Select, SelectItem, CardFooter,
    Pagination
} from '@nextui-org/react';
import axios from 'axios';
import config from '../config.json';
import {Database, Clock, Speaker, Music} from 'react-feather'

function Fun(props) {

    const [songInput, setSongInput] = useState('');
    const [songAll, setSongAll] = useState({});
    const [genres, setGenres] = useState([]);
    const [years, setYears] = useState([2010, 2019]);
    const [yearsAll, setYearsAll] = useState([]);
    const [genreInput, setGenreInput] = useState('');
    const [genreOutput, setGenreOutput] = useState([]);


    const [currentPage, setCurrentPage] = useState(1);
    const totalSongs = yearsAll.length;  // Total number of songs

    const yearAll = yearsAll[currentPage - 1]; // Adjust index for zero-based array

    const [currentPage2, setCurrentPage2] = useState(1);
    const genreSongs = genreOutput.length;  // Total number of songs

    const genreAll = genreOutput[currentPage2 - 1]; // Adjust index for zero-based array

    const handleSong = async (e) => {
        e.preventDefault();
        const encodedsong = encodeURIComponent(songInput);
        try {
            const response = await axios.get(`http://localhost:8080/music/${encodedsong}`);
            setSongAll(response.data); // Corrected from response.data[0] to response.data
            console.log("Fetched song data:", response.data);

            // Since response.data is an object, alerting this way isn't very user-friendly. You might want to show a specific attribute:
            alert(`Song fetched: ${response.data.title} by ${response.data.artist}`);
          } catch (error) {
            console.log(error);
            alert(error.message);
          }
      
          //clear song input
          setSongInput("");
    }

    const handleYear = async (e) => {
        e.preventDefault();
        console.log("first" + years[0]);
        console.log("second" + years[1]);
        
        try {
            const response = await axios.get(`http://localhost:8080/years/${years[0]}/${years[1]}`);
            setYearsAll(response.data);
            console.log(yearsAll);
          } catch (error) {
            console.log(error);
            alert(error.message);
          }
        
        //clear year input
        setCurrentPage(1);
        setYears([2010, 2019]);
    }

    const handleGenre = async (e) => {
        e.preventDefault();
        const encodedgenre = encodeURIComponent(genreInput);
        try {
            const response = await axios.get(`http://localhost:8080/genres/${encodedgenre}`);
            setGenreOutput(response.data);
          } catch (error) {
            console.log(error);
            alert(error.message);
          }
      
          //clear genre input
          setCurrentPage2(1);
          setGenreInput("");
    }

    useEffect(() => {
        axios.get('http://localhost:8080/allGenres') 
            .then(response => {
                // Handle the response by updating the state with the received genres
                setGenres(response.data);
            })
            .catch(error => {
                // Handle errors here, such as updating the UI to show an error message
                console.error('Error fetching genres:', error);
                setGenres([]); // Optionally reset the genres list on error
            });
    }, []);


    return (
        <div>
           <div className="flex justify-center items-center">
            <h1 className="font-bold text-2xl mr-4">Song Search with MongoDB</h1>
            <Database />
            </div>
            
            <div className="flex justify-around items-center w-full">
    <Card className="flex-1 mx-2 mt-10 max-w-md" shadow="none">
        <CardBody>
            <form className="flex items-center" onSubmit={handleSong}>
                <Input
                    type="text"
                    label="Song"
                    placeholder="Enter a song title"
                    value={songInput}
                    onChange={(e) => setSongInput(e.target.value)}
                />
                <Button isIconOnly type="submit" className="ml-2" size="lg">
                    <Music />
                </Button>
            </form>
        </CardBody>
                <Card className="py-4" shadow="none">
                {Object.keys(songAll).length > 0 && 
                ( <>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{songAll.topGenre}</p>
                  <h4 className="font-bold text-large">{songAll.title}</h4>
                  <h5>by {songAll.artist}</h5>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                <div className="grid grid-cols-2 gap-2">
                <h3><strong>Year:</strong> {songAll.year}</h3>
                <h3><strong>BPM:</strong> {songAll.bpm}</h3>
                <h3><strong>Energy:</strong> {songAll.nrgy}</h3>
                <h3><strong>Danceability:</strong> {songAll.dnce}</h3>
                <h3><strong>Loudness (dB):</strong> {songAll.dB}</h3>
                <h3><strong>Liveness:</strong> {songAll.live}</h3>
                <h3><strong>Valence:</strong> {songAll.val}</h3>
                <h3><strong>Duration (s):</strong> {songAll.dur}</h3>
                <h3><strong>Acousticness:</strong> {songAll.acous}</h3>
                <h3><strong>Speechiness:</strong> {songAll.spch}</h3>
                <h3><strong>Popularity:</strong> {songAll.pop}</h3>
            </div>
                </CardBody></> )}
              </Card>
            
    </Card>
    <Card className="flex-1 mx-2 mt-10 max-w-md" shadow="none">
        <CardBody>
        <form className="flex items-center" onSubmit={handleYear}>
            <Slider 
                label="Recommendations by Year Range"
                step={1} 
                minValue={2010} 
                maxValue={2019} 
                size="lg"
                defaultValue={[2010, 2019]} 
                getValue={(year) => `${year}`}
                onChange={(e) => setYears(e)}
                className="flex-1 mx-2 max-w-md"
            />
             <Button isIconOnly type="submit" className="ml-2" size="lg">
                    <Clock />
                </Button>
            </form>
        </CardBody>
        <Card className="w-full max-w-lg py-4" shadow="none">
        {yearAll && (
          <>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{yearAll.topGenre}</p>
              <h4 className="font-bold text-large">{yearAll.title}</h4>
              <h5>by {yearAll.artist}</h5>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <div className="grid grid-cols-2 gap-2">
                <h3><strong>Year:</strong> {yearAll.year}</h3>
                <h3><strong>BPM:</strong> {yearAll.bpm}</h3>
                <h3><strong>Energy:</strong> {yearAll.nrgy}</h3>
                <h3><strong>Danceability:</strong> {yearAll.dnce}</h3>
                <h3><strong>Loudness (dB):</strong> {yearAll.dB}</h3>
                <h3><strong>Liveness:</strong> {yearAll.live}</h3>
                <h3><strong>Valence:</strong> {yearAll.val}</h3>
                <h3><strong>Duration (s):</strong> {yearAll.dur}</h3>
                <h3><strong>Acousticness:</strong> {yearAll.acous}</h3>
                <h3><strong>Speechiness:</strong> {yearAll.spch}</h3>
                <h3><strong>Popularity:</strong> {yearAll.pop}</h3>
              </div>
            </CardBody>
          </>
        )}
      </Card>
      <div className="flex flex-col gap-5 items-center">
        <p className="text-small text-default-500"> Page: {currentPage}</p>
        <Pagination
          total={totalSongs}
          initialPage={1}
          color="primary"
          page={currentPage}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>

    </Card>
    <Card className="flex-1 mx-2 mt-10 max-w-md" shadow="none">
        <CardBody>
        <form className="flex items-center" onSubmit={handleGenre}>
        <Select 
        label="Recommendations by genre" 
        className="max-w-xs"
        onChange={(e) => setGenreInput(genres[e.target.value])}
        >
        {genres.map((genre, ix) => (
          <SelectItem key={ix} value={genre}>
            {genre}
          </SelectItem>
        ))}
      </Select>
      <Button isIconOnly type="submit" className="ml-2" size="lg">
        <Speaker />
        </Button>
        </form>
        </CardBody>
        <Card className="w-full max-w-lg py-4" shadow="none">
        {genreAll && (
          <>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">{genreAll.topGenre}</p>
              <h4 className="font-bold text-large">{genreAll.title}</h4>
              <h5>by {genreAll.artist}</h5>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <div className="grid grid-cols-2 gap-2">
                <h3><strong>Year:</strong> {genreAll.year}</h3>
                <h3><strong>BPM:</strong> {genreAll.bpm}</h3>
                <h3><strong>Energy:</strong> {genreAll.nrgy}</h3>
                <h3><strong>Danceability:</strong> {genreAll.dnce}</h3>
                <h3><strong>Loudness (dB):</strong> {genreAll.dB}</h3>
                <h3><strong>Liveness:</strong> {genreAll.live}</h3>
                <h3><strong>Valence:</strong> {genreAll.val}</h3>
                <h3><strong>Duration (s):</strong> {genreAll.dur}</h3>
                <h3><strong>Acousticness:</strong> {genreAll.acous}</h3>
                <h3><strong>Speechiness:</strong> {genreAll.spch}</h3>
                <h3><strong>Popularity:</strong> {genreAll.pop}</h3>
              </div>
            </CardBody>
          </>
        )}
      </Card>
      <div className="flex flex-col gap-5 items-center">
        <p className="text-small text-default-500"> Page: {currentPage2}</p>
        <Pagination
          total={genreSongs}
          initialPage={1}
          color="primary"
          page={currentPage2}
          onChange={(page) => setCurrentPage2(page)}
        />
      </div>
    </Card>
    
</div>

        </div>
    );
}

export default Fun;