import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function AboutPage(){
    return(
        <Section2 isFancy={true}>
            <Heading>About Me</Heading>
            <Post
                title="Rheno Rayhan Fayyaz Dhana Pramudya"
                body="NIM: 2141720157"
            />
        </Section2>
    );
}