import React from "react";
import { TiHeart } from "react-icons/ti";

export default function Photo(props) {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={props.photo.cover_photo.urls.regular}
        alt={props.photo.cover_photo.alt_description}
      />
      <div className="card-body">
        <h5 className="card-title">
          {props.photo.cover_photo.alt_description || props.photo.title}
        </h5>
        <span>
          <TiHeart />
          {props.photo.cover_photo.likes} likes
        </span>
      </div>
    </div>
  );
}
