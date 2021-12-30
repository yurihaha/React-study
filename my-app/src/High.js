import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { Component, Fragment } from "react";

class High extends Component {
  render() {
    // const series2 = this.props.data; //App.js에서 데이터를 보내줄 예정

    High.defaultProps = {
      name: "하유리"
    };
    const options = {
      chart: {
        type: "spline",
        zoomType: "x",
        scrollablePlotArea: {
          minWidth: 200,
          scrollPositionX: 1
        }
      },

      title: {
        text: "합천댐 구현 여부 하이차트 테스트",
        align: "left"
      },
      subtitle: {
        text: "Source: WorldClimate.com",
        align: "left"
      },
      credits: {
        enabled: false
      },
      xAxis: [
        {
          categories: [
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21"
          ],
          crosshair: true
        }
      ],
      yAxis: {
        title: {
          text: "Temperature ( °C )"
        }
      },

      tooltip: {
        shared: true
      },
      legend: {
        layout: "vertical",
        align: "left",
        x: 80,
        verticalAlign: "top",
        y: 55,
        floating: true,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || // theme
          "rgba(255,255,255,0.25)"
      },
      accessibility: {
        announceNewData: {
          enabled: true,
          minAnnounceInterval: 15000,
          announcementFormatter: function (allSeries, newSeries, newPoint) {
            if (newPoint) {
              return "New point added. Value: " + newPoint.y;
            }
            return false;
          }
        }
      },
      // plotOptions: {
      //   series: {
      //     stacking: "normal",
      //     dataLabels: {
      //       enabled: true,
      //       format: "<b>{point.y}</b>"
      //     }
      //   },
      //   arearange: {
      //     // shared options for all arearange series
      //   }
      // },
      plotOptions: {
        columnrange: {
          dataLabels: {
            enabled: true,
            format: "{y}°C"
          }
        }
      },
      series: [
        {
          name: "Temperatures",
          data: [
            [-9.9, 10.3],
            [-8.6, 8.5],
            [-10.2, 11.8],
            [-1.7, 12.2],
            [-0.6, 23.1],
            [3.7, 25.4],
            [6.0, 26.2],
            [6.7, 21.4],
            [3.5, 19.5],
            [-1.3, 16.0],
            [-8.7, 9.4],
            [-9.0, 8.6]
          ]
        }
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                floating: false,
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom",
                x: 0,
                y: 0
              }
              // yAxis: [
              //   {
              //     labels: {
              //       align: "right",
              //       x: 0,
              //       y: -6
              //     },
              //     showLastLabel: false
              //   },
              //   {
              //     labels: {
              //       align: "left",
              //       x: 0,
              //       y: -6
              //     },
              //     showLastLabel: false
              //   },
              //   {
              //     visible: false
              //   }
              // ]
            }
          }
        ]
      }
    };

    return (
      <Fragment>
        <HighchartsReact highcharts={Highcharts} options={options} />
        {/* <div>안녕하세요 제 이름은 {props.name} 입니다.</div> */}
      </Fragment>
    );
  }
}
export default High;
