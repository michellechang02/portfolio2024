import React, {useState, useEffect} from 'react';
import {Card, CardBody, Input, Button, Slider, CardHeader, Select, SelectItem, CardFooter} from '@nextui-org/react';
import {Search} from 'react-feather';
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

    const handleSong = async (e) => {
        const encodedsong = encodeURIComponent(songInput);
        try {
            const response = await axios.get(`http://localhost:8080/music/${encodedsong}`);
            setSongAll(response.data);
            console.log(songAll);
          } catch (error) {
            console.log(error);
            alert(error.message);
          }
      
          //clear song input
          setSongInput("");
    }

    const handleYear = async (e) => {
        console.log("first" + years[0]);
        console.log("second" + years[1]);
        
        try {
            const response = await axios.get(`http://localhost:8080/years/${years[0]}/${years[1]}`);
            setYearsAll(response.songs);
            console.log(yearsAll);
          } catch (error) {
            console.log(error);
            alert(error.message);
          }
        
        //clear year input
        setYears([]);
    }

    const handleGenre = async (e) => {
        const encodedgenre = encodeURIComponent(genreInput);
        try {
            const response = await axios.get(`http://localhost:8080/music/${encodedgenre}`);
            setGenreOutput(response.data[0]);
          } catch (error) {
            console.log(error);
            alert(error.message);
          }
      
          //clear genre input
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
        {songAll !== null && 
            (<CardFooter>
                {songAll.title}
            </CardFooter>)
        }
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
        {genreOutput.length > 0 && 
            (<CardFooter>
                {genreOutput.map((genre) => <div>{genre.title}</div>)}
            </CardFooter>)
        }
    </Card>
    
</div>

        </div>
    );
}

export default Fun;