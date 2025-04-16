import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import { useCrypto } from "../context/crypto-context";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PortfolioChart() {
  const { assets, loading, generateColors } = useCrypto();

  const nameCount = {};
  const labels = [];
  const totalAmounts = [];

  assets.forEach((asset) => {
    if (nameCount[asset.name]) {
      nameCount[asset.name]++;
    } else {
      nameCount[asset.name] = 1;
    }

    labels.push(
      nameCount[asset.name] === 1
        ? asset.name
        : `${asset.name} (${nameCount[asset.name] - 1})`
    );
    totalAmounts.push(asset.totalAmount);
  });

  const dataChart = {
    labels: labels,
    datasets: [
      {
        label: "$",
        data: totalAmounts,
        backgroundColor: generateColors,
      },
    ],
  };
  // const dataChart = {
  //   labels: assets.map((asset) => asset.name),
  //   datasets: [
  //     {
  //       label: "$",
  //       data: assets.map((asset) => asset.totalAmount),
  //       backgroundColor: generateColors,
  //     },
  //   ],
  // };

  return (
    <div className="chart-container" id="chart">
      <Line data={loading ? { labels: [], datasets: [] } : dataChart} />
    </div>
  );
}
