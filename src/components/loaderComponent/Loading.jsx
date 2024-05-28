import { RingLoader } from "react-spinners";
import "./loading.css";
const Loading = () => {
  return (
    <div className="loadingGrid">
      <div className="loading-container">
        <RingLoader className="loading-component" color="#36d7b7" size={150} />
        <h5 className="loading-containerTitle">Un momento...</h5>
      </div>
    </div>
  );
};

export default Loading;
