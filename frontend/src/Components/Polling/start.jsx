import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Data from "../../Resources/db.json";
import axios from "axios";
export default function Start() {

  const [data, setData] = useState([]);
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [third, setThird] = useState(null);
  var datas = Data;
  console.log(datas);
  const handler = (e) => {
    let filtered = datas.filter((item) =>
      item.name.includes(e.currentTarget.value)
    );
    setData(filtered);
  };
  useEffect(() => {axios.get("https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json")
      .then((res) => {setData(res.data);console.log(res);});}, []);
  const rankone = (e) => {
    if (e !== second && e !== third) {
      localStorage.setItem("first", e);
      setFirst(e);
    }
  };
  const ranktwo = (e) => {
    if (e !== first && e !== third) {
      localStorage.setItem("second", e);
      setSecond(e);
    }
  };
  const rankthree = (e) => {
    if (e !== second && e !== first) {
      localStorage.setItem("third", e);
      setThird(e);
    }
  };
  const pollhandler = () => {
      <Link to="/result"></Link>
  };
  return (
    <div className="start">
      {first !== null && second !== null && third !== null ? (
        <button onClick={pollhandler}><Link to="/result">Submit Poll</Link></button>
      ) : (
        <div />
      )}
      <div className="dish">
        {data.length > 0
          ? data.map((item, index) => (
              <div key={index} className="itemCard">
                <div className="buttonWrapper">
                  <button className="rank" style={{background:item.id === first ? "green" : "skyblue",}}onClick={() => rankone(item.id)}>
                    1
                  </button>
                  <button className="rank"style={{background:item.id === second ? "green" : "skyblue",}}onClick={() => ranktwo(item.id)}>
                    2
                  </button>
                  <button className="rank"style={{background:item.id === third ? "green" : "skyblue",}}onClick={() => rankthree(item.id)}>
                    3
                  </button>
                </div>
                     <img src={item.image} alt="image" />
                     <h2>{item.dishName}</h2>
                     <p>{item.description}</p>
                </div>
            )): null}
      </div>
    </div>
  );
}