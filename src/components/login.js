import { Auth } from 'aws-amplify';
import Message from "./components/message";

async function signIn() {
    try {
        const user = await Auth.signIn(email, password);
    } catch (error) {
        console.log('error signing in', error);
    }
}

export default function Message() {
   return <h1>Hello {user.username}</h1>
}