import { Button } from "@mui/material";
import { signIn, getUser } from './../service/auth';

function AdminPage() {
    return <>
        <h2> Admin Page </h2>
        <Button onClick={signIn}>Sign in</Button>
        <Button onClick={()=>{
            let user = getUser();
            console.log(user);
        }}>Get current user data</Button>
    </>
}

export default AdminPage;