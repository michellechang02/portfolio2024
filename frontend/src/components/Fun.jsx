import React, {useState, useEffect} from 'react';
import {Card, CardBody, Input, Button, Slider, CardHeader, Select, SelectItem} from '@nextui-org/react';
import {Search} from 'react-feather';
import axios from 'axios';
import config from '../config.json';
import {Database, Clock, Speaker, Music} from 'react-feather'

function Fun(props) {

    const [songInput, setSongInput] = useState('');
    const [songAll, setSongAll] = useState([]);
    const [genres, setGenres] = useState([])

    const handleSubmit = async (e) => {
        const encodedsong = encodeURIComponent(songInput);
        try {
            const response = await axios.get(
              `${config.serverURL}/search?q=${encodedsong}`
            );
            setSongAll(response.data[0]);
          } catch (error) {
            console.log(error);
            alert(error.message);
          }
      
          //clear song input
          setSongInput("");
    }

    useEffect(() => {
        axios.get('http://localhost:8080/allGenres') // Make sure the URL matches your server's address
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
            <form className="flex items-center" onSubmit={handleSubmit}>
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
    </Card>
    <Card className="flex-1 mx-2 mt-10 max-w-md" shadow="none">
        <CardBody>
        <form className="flex items-center" onSubmit={handleSubmit}>
            <Slider 
                label="Recommendations by Year Range"
                step={1} 
                minValue={2010} 
                maxValue={2019} 
                size="lg"
                defaultValue={[2010, 2019]} 
                getValue={(year) => `${year}`}
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
        <form className="flex items-center" onSubmit={handleSubmit}>
        <Select 
        label="Recommendations by genre" 
        className="max-w-xs" 
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
    </Card>
    
    
    
</div>

        </div>
    );
}

export default Fun;