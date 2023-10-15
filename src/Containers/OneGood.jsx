import { useSelector } from "react-redux";
import { OneGoodContent } from "../Components/OneGoodContent/OneGoodContent";

export const OneGood = () => {
  const goodData = useSelector((state) => state.good.good);
  return <OneGoodContent goodData={goodData} />;
};
