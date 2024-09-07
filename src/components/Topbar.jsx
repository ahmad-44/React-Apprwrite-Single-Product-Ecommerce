import { topbarText } from "../constants/content";
function Topbar() {
  return (
    <div className="bg-accent text-cloud flex justify-center text-lg py-1">
      <p>{topbarText}</p>
    </div>
  );
}

export default Topbar;
