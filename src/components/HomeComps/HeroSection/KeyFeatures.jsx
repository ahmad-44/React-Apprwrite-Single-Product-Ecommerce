import { keyFeatures } from "../../../constants/content";
function KeyFeatures() {
  return (
    <div className="mt-5">
      <ul>
        <h3 className="text-2xl font-bold">Key Features</h3>
        {keyFeatures.map((item) => (
          <li key={item} className="text-lg mt-3 font-semibold">
            ✅ {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KeyFeatures;
