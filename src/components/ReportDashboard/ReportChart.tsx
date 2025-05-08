import React, { useEffect } from 'react';
import Highcharts from 'highcharts';

const ProductQualityChart: React.FC = () => {
  useEffect(() => {
    // Dữ liệu từ máy sản xuất
    const dataOutputAndError = [
      { ngay: "2025-04-01", sanPhamTot: 120, sanPhamLoi: 50 },
      { ngay: "2025-04-02", sanPhamTot: 110, sanPhamLoi: 20 },
      { ngay: "2025-04-03", sanPhamTot: 95, sanPhamLoi: 30 },
      { ngay: "2025-04-04", sanPhamTot: 105, sanPhamLoi: 20 },
      { ngay: "2025-04-05", sanPhamTot: 130, sanPhamLoi: 40 },
      { ngay: "2025-04-06", sanPhamTot: 140, sanPhamLoi: 10 },
      { ngay: "2025-04-07", sanPhamTot: 125, sanPhamLoi: 25 },
      { ngay: "2025-04-08", sanPhamTot: 135, sanPhamLoi: 15 },
      { ngay: "2025-04-09", sanPhamTot: 110, sanPhamLoi: 30 },
      { ngay: "2025-04-10", sanPhamTot: 120, sanPhamLoi: 20 },
      { ngay: "2025-04-11", sanPhamTot: 100, sanPhamLoi: 35 },
      { ngay: "2025-04-12", sanPhamTot: 115, sanPhamLoi: 25 },
      { ngay: "2025-04-13", sanPhamTot: 130, sanPhamLoi: 15 },
      { ngay: "2025-04-14", sanPhamTot: 140, sanPhamLoi: 5 },
      { ngay: "2025-04-15", sanPhamTot: 110, sanPhamLoi: 30 },
      { ngay: "2025-04-16", sanPhamTot: 125, sanPhamLoi: 10 },
      { ngay: "2025-04-17", sanPhamTot: 120, sanPhamLoi: 20 },
      { ngay: "2025-04-18", sanPhamTot: 135, sanPhamLoi: 15 },
      { ngay: "2025-04-19", sanPhamTot: 115, sanPhamLoi: 25 },
      { ngay: "2025-04-20", sanPhamTot: 110, sanPhamLoi: 30 },
      { ngay: "2025-04-21", sanPhamTot: 125, sanPhamLoi: 20 },
      { ngay: "2025-04-22", sanPhamTot: 135, sanPhamLoi: 10 },
      { ngay: "2025-04-23", sanPhamTot: 120, sanPhamLoi: 15 },
      { ngay: "2025-04-24", sanPhamTot: 130, sanPhamLoi: 20 },
      { ngay: "2025-04-25", sanPhamTot: 110, sanPhamLoi: 25 },
      { ngay: "2025-04-26", sanPhamTot: 105, sanPhamLoi: 30 },
      { ngay: "2025-04-27", sanPhamTot: 120, sanPhamLoi: 15 },
      { ngay: "2025-04-28", sanPhamTot: 130, sanPhamLoi: 10 },
      { ngay: "2025-04-29", sanPhamTot: 115, sanPhamLoi: 25 },
      { ngay: "2025-04-30", sanPhamTot: 125, sanPhamLoi: 20 }
    ];

    // Biến đổi dữ liệu thành định dạng phù hợp cho biểu đồ
    const dates = dataOutputAndError.map(item => item.ngay);
    const goodProducts = dataOutputAndError.map(item => item.sanPhamTot);
    const badProducts = dataOutputAndError.map(item => item.sanPhamLoi);

    // Chuyển đổi ngày tháng từ chuỗi thành dạng timestamp
    const categories = dates.map(date => new Date(date).getTime());

    // Tạo biểu đồ
    Highcharts.chart('container', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Sản phẩm tốt và lỗi theo ngày',
        align: 'left'
      },
      xAxis: {
        type: 'datetime',
        categories: categories,
        title: {
          text: 'Ngày'
        }
      },
      yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
          text: 'Số lượng sản phẩm'
        }
      },
      plotOptions: {
        column: {
          stacking: 'normal'
        }
      },
      series: [
        {
          name: 'Sản phẩm lỗi',
          data: badProducts,
          stack: 'Product',
          color: '#f5222d'
        },
        {
          name: 'Sản phẩm tốt',
          data: goodProducts,
          stack: 'Product',
          color: '#52c41a'
        }
      ]
    });
  }, []);

  return (
    <div>
      <div id="container" style={{ height: '400px' }} />
    </div>
  );
};

export default ProductQualityChart;
