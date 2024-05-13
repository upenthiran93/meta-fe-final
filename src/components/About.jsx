import img1 from '../assets/images/Mario and Adrian b.jpg';
import img2 from '../assets/images/restaurant.jpg';

function About() {
  return (
    <div className={"About"}>
        <div className={"About_info"}>
            <h1>About</h1>
            <p>Endeavor bachelor but add eat pleasure doubtful sociable. Age forming covered you entered the examine.
                Blessing scarcely confined her contempt wondered shy. Dashwoods contented sportsmen at up no convinced

      </p>

        </div>
        <div className={"About_images"}>
            <img className={"About_image AB-img1"} src={img1} alt="about"/>
            <img className={"About_image AB-img2"} src={img2} alt="about"/>

        </div>
    </div>
  );
}

export default About;