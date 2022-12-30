import Button from "../components/Button";
import { ImPacman, ImEvil2, ImPointRight } from "react-icons/im";

function ButtonPage() {
    const handleClick = () => {
        console.log('Click');
    };
    return (
        
        <div>
            <h1 className="text-3xl font-bold underline">
                Welcome, Everything is Fine!
            </h1>
            <br></br>
            <div>
                <Button primary rounded onClick={handleClick}>
                    <ImPacman />
                    Save
                </Button>
            </div>
            <div>
                <Button secondary>Click Here</Button>
            </div>
            <div>
                <Button success outline>
                    <ImPointRight />
                    Buy Now
                </Button>
            </div>
            <div>
                <Button warning rounded outline>Add to Cart</Button>
            </div>
            <div>
                <Button danger rounded>
                    <ImEvil2 />
                    Hide Ads!
                </Button>
            </div>
        </div>
    ); 
  }

  export default ButtonPage;