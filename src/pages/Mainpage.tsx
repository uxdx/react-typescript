import Navbar from './Navbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


function MainPage() {
    return <div>
        <Navbar/>
        <Button variant="contained">Hello World</Button>
        <Container maxWidth="sm"/>
    </div>
}

export default MainPage