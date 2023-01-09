import Button from "./components/Button";
import Accordion from "../components/Accordion";
import { ImPacman, ImEvil2, ImPointRight } from "react-icons/im";

function AccordionPage() {
    const items = [
        {
            id: '1',
            label: 'Well, then good news! It\'s a suppository.',
            content: 'Does anybody else feel jealous and aroused and worried? Stop! Don\t shoot fire stick in space canoe! Cause explosive decompression! You guys aren\'t Santa! You\'re not even robots. How dare you lie in front of Jesus?',
        },
        {
            id: '2',
            label: 'Yeah, I do that with my stupidness.',
            content: 'When will that be? Interesting. No, wait, the other thing: tedious. OK, if everyone\'s finished being stupid. I never loved you. Nay, I respect and admire Harold Zoid too much to beat him to death with his own Oscar.',
        },
        {
            id: '3',
            label: 'No! The kind with looting and maybe starting a few fires!',
            content: 'You seem malnourished. Are you suffering from intestinal parasites? Oh, all right, I am. But if anything happens to me, tell them I died robbing some old man. I love this planet! I\'ve got wealth, fame, and access to the depths of sleaze that those things bring.',
        },
    ];
    
    return <Accordion items={items}/>
}

  export default AccordionPage;