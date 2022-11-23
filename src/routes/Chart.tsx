import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchConiHistory } from "../api";

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    fetchConiHistory(coinId)
  );
  return <h1>Chart {coinId}</h1>;
}

export default Chart;
