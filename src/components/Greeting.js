import React from "react";
import Typical from "react-typical"
import { Jumbotron} from "react-bootstrap"


function Greeting(){

return (
    <Jumbotron className="jumboclass centeredtext">
<h1>Hi, I'm Kristina Iankovskaia</h1>
<p>I am {' '}

<Typical
loop={Infinity}
wrapper="b"
steps={[
    'a developer 💻',
    1000,
    'an accountant 💵',
    1000,
    'a designer 🌺',
    1000,
    'a Youtuber 🎥',
    1000,
    'a yogi ☘',
    1000,
    'a fashionista 👄',
    1000,
    'a singer 🧑‍🎤',
    1000,
    'a volunteer 🆘',
    1000,
    'Russian ❤️',
    1000,
    'a puppy lover 🐕 ',
    1000,
]}
/>
</p>
</Jumbotron>
);
}
export default Greeting