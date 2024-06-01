import {Box, Button} from "@mui/material";
import PublicIcon from '@mui/icons-material/Public';
import axios from "axios";
import {useState} from "react";
import GridColumns from "../components/GridColumns";

export default function MyAPIScreen() {
    const [usersList, setUsersList] = useState<any>([])
    const [dataLoader, setDataLoader] = useState(false)

    const getApiData = () => {
        setDataLoader(true)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                console.log(res, "Success Response")
                setUsersList([...res.data]);
                setDataLoader(false)
            }).catch((err) => {
            console.log(err, "Error");
            setDataLoader(false)
        })
    }


    return <main>
        <Box>
            <h1>API Handling <PublicIcon/></h1>
            <Button onClick={getApiData} sx={{margin: 1, textTransform: 'capitalize'}} variant="contained">Get
                Data</Button>
            <Button sx={{margin: 1, textTransform: 'capitalize'}} variant="contained">Post Data</Button>
            <Button sx={{margin: 1, textTransform: 'capitalize'}} variant="contained">Put Data</Button>
            <Button sx={{margin: 1, textTransform: 'capitalize'}} variant="contained">Delete Data</Button>

            <GridColumns
                loading={dataLoader}
                gridCols={[
                    {
                        key: 'name',
                        label: 'User Name'
                    },
                    {
                        key: 'email',
                        label: 'User Email'
                    },
                    {
                        key: 'phone',
                        label: 'Phone'
                    },
                    {
                        key: 'website',
                        label: 'Web URL'
                    },
                    {
                        key: '',
                        label: 'Delete',
                        displayField: (row: any) => <Button onClick={() => {
                            console.log(row)
                        }} variant="contained">Delete</Button>
                    },
                ]} datasource={usersList}/>
        </Box>
    </main>
}