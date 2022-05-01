//import App from '../App';
//import Heart from './Heart';
import CandyColoredHeart from './CandyHeartColor';

const messages = [
    'cool cud',
    'me my <3',
    'you are bear',
    'team bear',
    'time hug',
    'fang',
    'bog love',
    'me have love',
    'all hover',
    'sweat poo',
    'u hack',
    'stank love',
    'heart me',
    'wink bear',
    'bear bear',
    'be my bear',
    'yank o way',
    'mage love',
    'oy',
    'in a fan'
];


const HeartsList = () => {
    return (
        <div className='hearts-container'>
            {messages.map((messages, index) => (
                <CandyColoredHeart key={index} text={messages} />
            ))}
        </div>
    );
};

export default HeartsList;