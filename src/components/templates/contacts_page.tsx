import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function ContactsPage(){
    return(
        <Section2 isFancy={true}>
            <Heading>My Contact</Heading>
            <Post
                title="Email"
                body="rayhanrheno@gmail.com"
            />
        </Section2>
    );
}