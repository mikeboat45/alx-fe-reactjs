export default function RecipeCard({ image, title, summary }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      <div className="flex-shrink-0">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="font-semibold text-xl mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 flex-grow">{summary}</p>
      </div>
    </article>
  );
}
