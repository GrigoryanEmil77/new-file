import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Module from "./Join.module.css";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import img6 from "../img/img6.jpg";

const mens = [
  { id: "1", name: "Jack", src: img1 },
  { id: "2", name: "Luka", src: img2 },
  { id: "3", name: "Jons",   src: img3 },
  { id: "4", name: "Irina",  src: img4 },
  { id: "5", name: "Mila",   src: img5 },
  { id: "6", name: "James",  src: img6 },

];

function Join() {
  const [imgId, setImgId] = useState("");
  const [peoples] = useState(mens);
  const [count, setCount] = useState(5007);

  const countClick = () => {
    setCount((Count) => {
      const newCount = Number(Count) + 1;
      localStorage.setItem("count", newCount);
      return newCount;
    });
  };

  useEffect(() => {
    const value = localStorage.getItem("count");
    if (value) setCount(value);
  },[]);

  return (
    <div className={Module.cont}>
      <div className={Module.people}>
        {peoples.map((people, i) => {
          return (
            <div className={Module.img} key={people.id}>
              <img
                className={Module.imges}
                src={people.src}
                style={{ border: imgId === i ? "5px solid blue" : "" ,}}
                onClick={() => {
                  setImgId(i);
                }}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className={Module.number}>
        <h2>
          Join {count}+ developers supercharging their <br />
          coding skills by building daily projects.
        </h2>
      </div>
      <div className={Module.number}>
        <Button
          sx={{
            width: "200px",
            height: "65px",
            backgroundColor: "rgb(210, 31, 210)",
            color: "white",
          }}
          onClick={countClick}
        >
          Join challenge
        </Button>
      </div>
    </div>
  );
}
export default Join;
