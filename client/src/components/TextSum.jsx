import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, Textarea, Button, Spacer } from "@nextui-org/react";
import { FilePlus, Clipboard } from "react-feather";
import axios from 'axios';

function TextSum(props) {

    const [value, setValue] = useState("");
    const [summarized, setSummarized] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://127.0.0.1:5000/summarize', {
            text: value,
          });
    
          if (response.status === 200) {
            setSummarized(response.data.summary);
          } else {
            console.error('Failed to summarize text');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
    const copyToClipboard = () => {
        navigator.clipboard.writeText(summarized).then(() => {
          alert('Copied to clipboard!');
        }).catch(err => {
          console.error('Could not copy text: ', err);
        });
      };
    

    useEffect(() => {

    }, [summarized])


    return (
        <div className="flex mt-20 items-center justify-center">
            
        <div className="w-4/5 flex flex-col gap-5">
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <div className="flex items-center">
                        <h4>Enter Text to Summarize</h4>
                        <Button isIconOnly type='submit' color="primary" className="ml-3" size="sm" variant="flat">
                        <FilePlus />
                        </Button>   
                    </div>
                </CardHeader>
                <CardBody>
                    <Textarea
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Enter text to summarize here"
                        size="sm"
                        fullWidth
                    />
                </CardBody>
            </Card>
            </form>
            <Spacer y={2} />
            <Card>
                <CardHeader>
                    <div className="flex items-center">
                        <h4>Summarized Text</h4>
                        <Button isIconOnly color="primary" className="ml-3" size="sm" 
                        onClick={copyToClipboard}
                        variant="flat">
                        <Clipboard />
                        </Button> 
                    </div>
                </CardHeader>
                <CardBody>
                    <Textarea
                        value={summarized}
                        readOnly
                        placeholder="Summarized text will appear here"
                        size="sm"
                        fullWidth
                    />
                </CardBody>
            </Card>
        </div>
    </div>
    );
}

export default TextSum;