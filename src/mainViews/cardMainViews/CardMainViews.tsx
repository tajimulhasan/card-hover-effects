import React from "react";
import Image from "next/image";
import { Col, Container } from "react-bootstrap";

import styles from "./cardMainViews.module.scss";

import firstImg from "../../images/a.png";
import secondImg from "../../images/b.png";
import thirdImg from "../../images/c.png";

export const CardMainViews = () => {

  const cardElements = [
    {
      image: firstImg,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing",
      title: "Mountain",
    },
    {
      image: secondImg,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing",
      title: "Deep Forest",
    },
    {
      image: thirdImg,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing",
      title: "Enjoy",
    },
  ];

  return (
    <>
      <Container className={styles.mainContainer}>
        <Col className={styles.cardContainer}>
          {cardElements.map((c, index) => (
            <div key={index} className={styles.cardElements}>
              <Image
                className={styles.cardImage}
                width={300}
                src={c.image}
                alt={c.title}
              />
              <div className={styles.imgDetail}>
                <p className="mb-2 text-muted">{c.description}</p>
                <p>{c.title}</p>
                <p className="mb-0">
                  <a href="#">Learn more</a>
                </p>
              </div>
            </div>
          ))}
        </Col>
      </Container>
    </>
  );
};
