import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkCards,
  filteredCardComplated,
  resetGame,
  selectCard,
} from "../redux/card/cardSlice";

const Card = () => {
  const dispatch = useDispatch();
  const card = useSelector((s) => s.card);
  const isComploted = useSelector(filteredCardComplated);
  console.log(isComploted);
  const [frameworks, setFrameworks] = useState([
    "angular2",
    "vue",
    "react",
    "grunt",
    "phantomjs",
    "ember",
    "babel",
    "ionic",
    "gulp",
    "meteor",
    "yeoman",
    "yarn",
    "nodejs",
    "bower",
    "browserify",
  ]);
  const [duplicatedFrameworks, setDuplicatedFrameworks] = useState([]);
  const [randomizedFrameworks, setRandomizedFrameworks] = useState([]);
  const [finalizedFrameworks, setFinalizedFrameworks] = useState([]);
  const [openedFrameworks, setOpenedFrameworks] = useState([]);

  //   if (card.openedFrameworks.length == 2) {
  //     setTimeout(() => {
  //       dispatch(checkCards());
  //     }, 750);
  //   }

  const handleClick = async (name, index) => {
    if (card.openedFrameworks.length == 2) {
      dispatch(checkCards());
    } else {
      //   let framework = {
      //     name,
      //     index,
      //   };
      dispatch(selectCard({ name, index }));

      if (card.openedFrameworks.length == 1) {
        setTimeout(() => {
          //   check();
          dispatch(checkCards());
        }, 750);
      }
    }
  };

  //   const check = () => {
  //     let finalizedFrameworksCopy = finalizedFrameworks;
  //     if (
  //       openedFrameworks[0].name == openedFrameworks[1].name &&
  //       openedFrameworks[0].index != openedFrameworks[1].index
  //     ) {
  //       finalizedFrameworksCopy[openedFrameworks[0].index].complete = true;
  //       finalizedFrameworksCopy[openedFrameworks[1].index].complete = true;
  //     } else {
  //       finalizedFrameworksCopy[openedFrameworks[0].index].close = true;
  //       finalizedFrameworksCopy[openedFrameworks[1].index].close = true;
  //     }

  //     setFinalizedFrameworks(finalizedFrameworksCopy);
  //     setOpenedFrameworks([]);
  //   };
  //   useEffect(() => {
  //     start();
  //   }, []);

  //   const start = () => {
  //     let finalizedFrameworks = [];

  //     setDuplicatedFrameworks(frameworks.concat(frameworks));
  //     setRandomizedFrameworks(shuffle(frameworks.concat(frameworks)));

  //     shuffle(frameworks.concat(frameworks)).map((name, index) => {
  //       finalizedFrameworks.push({
  //         name,
  //         close: true,
  //         complete: false,
  //         fail: false,
  //       });
  //     });
  //     setFinalizedFrameworks(finalizedFrameworks);
  //   };
  //   const shuffle = (array) => {
  //     let currentIndex = array.length,
  //       temporaryValue,
  //       randomIndex;
  //     while (0 !== currentIndex) {
  //       randomIndex = Math.floor(Math.random() * currentIndex);
  //       currentIndex -= 1;
  //       temporaryValue = array[currentIndex];
  //       array[currentIndex] = array[randomIndex];
  //       array[randomIndex] = temporaryValue;
  //     }
  //     return array;
  //   };

  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontSize: 24 }}>Puan: {card.TotalPoint}</span>
        <button
          style={{
            width: 80,
            height: 30,
            backgroundColor: "#F1F2F6",
            cursor: "pointer",
            color: "black",
            borderRadius: 10,
          }}
          onClick={() => {
            dispatch(resetGame());
          }}
          disabled={!isComploted}
        >
          Reset
        </button>
      </nav>
      <div className="playground">
        {card.items.map((framework, index) => {
          return (
            <CardItem
              key={index}
              framework={framework.name}
              click={() => {
                handleClick(framework.name, index);
              }}
              close={framework.close}
              complete={framework.complete}
            />
          );
        })}
      </div>
    </div>
  );
};

const CardItem = ({ framework, click, close, complete }) => {
  const clicked = (framework) => {
    click(framework);
  };
  return (
    <div
      className={
        "card" + (!close ? " opened" : "") + (complete ? " matched" : "")
      }
      onClick={() => clicked(framework)}
    >
      <div className="front">?</div>
      <div className="back">
        <img
          src={
            "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/" +
            framework +
            ".png"
          }
        />
      </div>
    </div>
  );
};

export default Card;
