import React from "react";
import Photo from "./Photo";

export default function Results(props) {
  return (
    <section className="card-columns">
      {props.photos.map((photo, index) => {
        if (photo.cover_photo) {
          return <Photo key={index} photo={photo} />;
        }
        return null;
      })}
    </section>
  );
}
