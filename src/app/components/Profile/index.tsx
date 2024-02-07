import Image from "next/image";
import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="prof_cover">
      <Image
        src={"/assets/debaProfile.jpeg"}
        width={250}
        height={250}
        alt="debashis profile"
        style={{
          borderRadius: "50%",
        }}
      />
      <div className="tp">Loojkhj</div>
    </div>
  );
}

export default Profile;
