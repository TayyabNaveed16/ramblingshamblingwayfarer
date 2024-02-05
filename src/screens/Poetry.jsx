import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PurpleNeons from '../components/PurpleNeons.jpg';
import Reprieve from '../components/Reprieve.jpg';
import Reveal from '../components/Reveal';
import RevealSlide from '../components/RevealSlide';
import RevealSlideLeft from '../components/RevealSlideLeft';

function Poetry() {
    return (
        <div className="bg-white mb-60">
            <div className="mt-10 sm:mt-36">

                <a href='/'>
                    <RevealSlideLeft>
                        <div className="flex justify-center items-center mt-20 sm:mr-96">
                            <Card className='w-80 h-80'>
                                <Card.Img variant="top" src={PurpleNeons} />
                                <Card.Body>
                                    <h1>Purple Neons</h1>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </RevealSlideLeft>
                </a>

            </div>
        </div>
    );
}

export default Poetry;
