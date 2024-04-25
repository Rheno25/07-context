import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
import AllPosts from "../organisms/allpost";

export default function ProfilePage(){
    return(
        <Section2 isFancy={true}>
            <Heading>My Profile</Heading>
            <Post
                title="Hello traveller!"
                body="Read about my adventure."
            />
            <AllPosts />
        </Section2>
    );
}