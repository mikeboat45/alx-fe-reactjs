import { useState, useEffect } from "react";

export default function HomePage(props) {
  const [details, setDetails] = useState({
    image: props.image,
    title: props.title,
    summary: props.summary,
  });

  useEffect(() => {
    setDetails({
      image: props.image,
      title: props.title,
      summary: props.summary,
    });
  }, [props.image, props.title, props.summary]);

  return (
    <div className="grid grid-rows">
      <article className="border-2 border-black rounded flex m-8">
        <div className="flex-shrink-0">
          <img src={details.image} alt="placeholder" className="rounded" />
        </div>
        <div className="m-2">
          <h2 className="font-semibold text-xl mb-2">{details.title}</h2>
          <p>{details.summary}</p>
        </div>
      </article>
    </div>
  );
}
