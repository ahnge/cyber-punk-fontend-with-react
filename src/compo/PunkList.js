import React from "react";
import { useGlobalContext } from "../context";
import { data } from "../data";
import CollectionCard from "./CollectionCard";
import "./PunkList.css";
import "swiper/css";

const PunkList = () => {
  const { getId } = useGlobalContext();

  return (
    <div className="punkList">
      {data.map((punk) => {
        const { id, name, traits, image } = punk;
        return (
          <div key={id} onClick={() => getId(id)}>
            <CollectionCard id={id} name={name} traits={traits} image={image} />
          </div>
        );
      })}
    </div>
  );
};

export default PunkList;
