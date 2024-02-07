import Image from "next/image";
import "./Menu.css";

export default function Menu() {
  return (
    <div className="menu_down_arr">
      <Image
        onClick={() => {
          let count = 0;
          function scroll() {
            console.log({ count, innerHeight });

            if (
              count > window.innerHeight
              // -
              // window.innerHeight / 25
            ) {
              return;
            }
            count += 10;
            // h 500
            // c 10
            //
            window.scrollBy(
              0,
              10
              // window.innerHeight
            );
            setTimeout(scroll, 2);
          }
          scroll();
        }}
        src="/assets/downarrow.png"
        width={150}
        height={150}
        alt="Picture of the author"
        style={{
          marginTop: "calc(80vh - 200px)",
          // marginLeft: "50vw",
        }}
      />
    </div>
  );
}
