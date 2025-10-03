// import { useState, useEffect } from "react";

export default function HomePage(props) {
  return (
    <article className="border-2 border-black rounded flex flex-row m-8">
      <div>
        <img src={props.image} alt="placeholder" className="rounded" />
      </div>
      <div className="m-2">
        <h2 className="font-semibold text-xl mb-2">{props.title}</h2>
        <p>{props.summary}</p>
      </div>
    </article>
  );
}
