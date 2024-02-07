import Typewriter from "typewriter-effect";
import "./Typewritter.css";

const strings: string[] = [
  `Hi 👋, I am Debashis, a frontend developer who is constantly looking for new & interesting problems to solve. ${[
    ...["👨‍💻"],
  ].join("")}`,
  "I have over 3 years of experience of professional frontend development. 🧑‍💼",
  "My skillset - [react.js, javascript, css, redux, typescript, jest, codeceptjs etc.]. ⚛️",
  "I would like to eagerly commit to your product development, let's make your org a rocketship 🚀!",
];

export default function Typewritter() {
  const abc = [];
  return (
    <div className="typewritter__cover">
      <Typewriter
        options={{
          strings,
          autoStart: true,
          loop: true,
          delay: 20,
        }}
        //   onInit={(typewriter) => {
        //     typewriter
        //       .typeString("Hello World!")
        //       .callFunction(() => {
        //         console.log("String typed out!");
        //       })
        //       .pauseFor(2500)
        //       .deleteAll()
        //       .callFunction(() => {
        //         console.log("All strings were deleted");
        //       })
        //       .start();
        //   }}
      />
    </div>
  );
}
