import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "highcharts/modules/exporting";
import "highcharts/highcharts-more";

const MtffChart = () => {
  const options = {
    chart: {
      type: "pie",
      height: 200,
      events: {
        render(this: Highcharts.Chart) {
          const chart = this;
          const series = chart.series[0];

          if (!series || !series.center) return;

          let customLabel = (chart.renderer as any).customLabel;

          if (!customLabel) {
            (chart.renderer as any).customLabel = chart.renderer
              .label("300<br/><strong>giờ</strong>", 0, 0, undefined, undefined, undefined, true)
              .css({
                color: "#000",
                textAlign: "center",
              })
              .attr({
                zIndex: 5,
              })
              .add();
            customLabel = (chart.renderer as any).customLabel;
          }

          const x = chart.plotLeft + series.center[0] - customLabel.getBBox().width / 2;
          const y = chart.plotTop + series.center[1] - customLabel.getBBox().height / 2;

          customLabel.attr({ x, y });
        },
      },
    },
    title: { text: undefined },
    credits: { enabled: false },
    tooltip: { pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>" },
    plotOptions: {
      pie: {
        innerSize: "60%",
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: { enabled: false, format: "{point.name}" },
      },
    },
    series: [
      {
        type: "pie",
        name: "Tỷ lệ",
        data: [
          { name: "Hoạt động", y: 210, color: "#28a745" },
          { name: "Đang bảo trì", y: 60, color: "#ffc107" },
        ],
      },
    ],
  };

  return (
    <>
      <p style={{ textAlign: "center", fontWeight: "bold" }}>
        Thời gian hết khấu hao (MTTF)
      </p>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};

export default MtffChart;
