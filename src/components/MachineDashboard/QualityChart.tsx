import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "highcharts/highcharts-more";
import "highcharts/highcharts-3d";
import useWebSocketHandler from "../../hooks/useWebSocketHandler";

const QualityChart: React.FC = () => {
    const [performance, setPerformance] = useState(0);
    const [productOk, setProductOk] = useState(0);
    const [productNg, setProductNg] = useState(0);
    const [runningTime, setRunningTime] = useState(0);

    const performancePercent = +(performance * 100).toFixed(1);

    const calculateCycle = () => {
        return runningTime && productOk + productNg !== 0
            ? (performance * runningTime) / (productOk + productNg)
            : 0;
    };

    const cycle = calculateCycle();

    const chartOptions: Highcharts.Options = {
        chart: {
            type: "pie",
            options3d: { enabled: true, alpha: 45, beta: 0 },
            height: 150,
            margin: 10,
            backgroundColor: "transparent",
        },
        credits: { enabled: false },
        exporting: { enabled: false },
        title: {
            text: `${performancePercent}%`,
            align: "center",
            verticalAlign: "middle",
            y: 30,
            style: { fontSize: "18px", fontWeight: "bold" },
        },
        tooltip: {
            pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                depth: 30,
                size: "150%",
                innerSize: "80%",
                dataLabels: { enabled: false },
            },
        },
        series: [
            {
                type: "pie",
                name: "Tỷ lệ",
                data: [
                    {
                        name: `Hiệu suất: ${performancePercent}%`,
                        y: performancePercent,
                        color: "#28a745",
                    },
                    {
                        name: "Tỷ lệ còn lại",
                        y: 100 - performancePercent,
                        color: "#ffc107",
                    },
                ],
            },
        ],
    };

    const data = [
        { status: "Dự kiến", value: productOk },
        { status: "Đạt", value: productNg },
        { status: "Không đạt", value: cycle.toFixed(0) },
    ];

    // WebSocket handlers
    const setupWebSocketHandlers = () => {
        useWebSocketHandler("factory/machine/M01/performance", (data: any) =>
            setPerformance(data.performance || 0)
        );
        useWebSocketHandler("factory/machine/M01/product_ok", (data: any) =>
            setProductOk(data.product_ok || 0)
        );
        useWebSocketHandler("factory/machine/M01/product_ng", (data: any) =>
            setProductNg(data.product_ng || 0)
        );
        useWebSocketHandler("factory/machine/M01/running_time", (data: any) =>
            setRunningTime(data.running_time || 0)
        );
    };

    setupWebSocketHandlers();

    const renderDataRows = () =>
        data.map((item, index) => (
            <div
                key={index}
                className="flex justify-between border-b last:border-none py-1 mx-2"
            >
                <span className="w-full">{item.status}</span>
                <span>{item.value}</span>
            </div>
        ));

    return (
        <div>
            {/* Performance Chart */}
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />

            {/* Product Information Table */}
            <div className="font-semibold text-center">CHẤT LƯỢNG</div>
            {renderDataRows()}
        </div>
    );
};

export default QualityChart;
