import {Box, Button} from "@mui/material";
import ApiIcon from '@mui/icons-material/Api';
import axios from "axios";
import {useState} from "react";
import GridColumns from "../components/GridColumns";

export default function MyAPIScreen() {
    const [usersList, setUsersList] = useState<any>([])
    const [dataLoader, setDataLoader] = useState(false)

    const getApiData = () => {
        setDataLoader(true)
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                console.log(res, "Success Response")
                setUsersList([...res.data]);
                setDataLoader(false)
            }).catch((err) => {
            console.log(err, "Error");
            setDataLoader(false)
        })
    }

    const postApiData = () => {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
         userId: 1,
         title: 'ABC Title',
         completed: true
        }).then((res) => {
                console.log(res, "Success Response")
            }).catch((err) => {
            console.log(err, "Error");
        })
    }

    const putApiData = () => {
        axios.put('https://jsonplaceholder.typicode.com/todos/1', {
        userId: 1,
            title: 'ABC Title 2',
            completed: false}).then((res:any) =>
        {
            console.log(res, "Success Response")
        }).catch((err) => {
            console.log(err, "Error Found");
        });
    }

    const deleteApiData = () => {
        axios.put('https://jsonplaceholder.typicode.com/todos/1')
            .then((res:any) => {
            console.log(res, "Success Response")
        }).catch((err) => {
            console.log(err, "Error Found");
        });
    }

    return <main>
        <Box>
            <h1>API Handling <ApiIcon/></h1>
            <Button onClick={getApiData} sx={{margin: 1, textTransform: 'capitalize'}} variant="contained">Get
                Data</Button>
            <Button onClick={postApiData} sx={{margin: 1, textTransform: 'capitalize'}} variant="contained">Post Data</Button>
            <Button onClick={putApiData} sx={{margin: 1, textTransform: 'capitalize'}} variant="contained">Put Data</Button>
            <Button onClick={deleteApiData} sx={{margin: 1, textTransform: 'capitalize'}} variant="contained">Delete Data</Button>

            <GridColumns
                loading={dataLoader}
                gridCols={[
                    {
                        key: 'id',
                        label: 'ID'
                    },
                    {
                        key: 'title',
                        label: 'Title'
                    },
                    {
                        key: 'price',
                        label: 'Price'
                    },
                    {
                        key: 'description',
                        label: 'Description'
                    },
                    {
                        key: 'category',
                        label: 'Category'
                    },
                    {
                        key: 'image',
                        label: 'Image'
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