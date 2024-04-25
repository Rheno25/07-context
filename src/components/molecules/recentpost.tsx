import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function RecentPosts(){
    return(
        <Section2 isFancy = {true}>
            <Heading>Newest Post</Heading>
            <Post
                title="Cita Rasa Lisbon"
                body="...those pasteis de nata!"
            />
            <Post
                title="Buenos Aires in a tango rhythm"
                body="I love them!"
            />
            <Post
                title="Rheno Rayhan Fayyaz Dhana Pramudya"
                body="NIM: 2141720157"
            />
        </Section2>
    );
}