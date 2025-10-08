export default function RecipeCard({ image, title, summary }) {
  return (
    <div className="grid grid-rows ">
      <article className="border-2 border-black rounded flex m-8 bg-white">
        <div className="flex-shrink-0">
          <img src={image} alt="placeholder" className="rounded" />
        </div>
        <div className="m-2 ">
          <h2 className="font-semibold text-xl mb-2">{title}</h2>
          <p>{summary}</p>
        </div>
      </article>
    </div>
  );
}
