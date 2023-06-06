// import React, { useState, useEffect } from "react";
// import Highcharts, { Options } from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import Select, { ValueType, OptionTypeBase } from "react-select";
// import axios from "axios";

// interface SeriesData {
//   name: string;
//   data: [number, number][];
// }

// interface ApiData {
//   name: string;
//   data: [number, number][];
// }

// interface TimeSeriesChartProps {}

// const TimeSeriesChart: React.FC<TimeSeriesChartProps> = () => {
//   const [selectedOptions, setSelectedOptions] = useState<
//     ValueType<OptionTypeBase>
//   >([]);
//   const [seriesData, setSeriesData] = useState<SeriesData[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://mocki.io/v1/84c271ab-1ed1-4563-80d2-4233c1181adf"
//         );
//         const apiData: ApiData[] = response.data;

//         const dropdownOptions: OptionTypeBase[] = apiData.map((data) => ({
//           label: data.name,
//           value: data.name
//         }));

//         const updatedSeriesData: SeriesData[] = apiData.map((data) => ({
//           name: data.name,
//           data: data.data
//         }));

//         setSeriesData(updatedSeriesData);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleDropdownChange = (selectedOptions: ValueType<OptionTypeBase>) => {
//     setSelectedOptions(selectedOptions);
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   const dropdownOptions: OptionTypeBase[] = seriesData.map((series, key) => ({
//     label: series.name,
//     value: series.name,
//     key: key
//   }));
//   console.log(dropdownOptions, "dropdownoptions");

//   const options: Options = {
//     chart: {
//       type: "line"
//     },
//     title: {
//       text: "Multi-Line Chart with Dropdown"
//     },
//     xAxis: {
//       type: "datetime",
//       title: {
//         text: "Date"
//       }
//     },
//     yAxis: {
//       title: {
//         text: "Value"
//       }
//     },
//     series: seriesData
//   };

//   const updateChartSeries = (
//     selectedOptions: ValueType<OptionTypeBase>
//   ): Options => {
//     const selectedValues = (selectedOptions as OptionTypeBase[]).map(
//       (option) => option.value
//     );

//     const filteredSeries = seriesData.filter((series) =>
//       selectedValues.includes(series.name)
//     );

//     const updatedOptions: Options = {
//       ...options,
//       series: filteredSeries.map((series) => ({
//         ...series,
//         type: "line"
//       }))
//     };

//     return updatedOptions;
//   };

//   return (
//     <div>
//       <Select
//         isMulti
//         options={dropdownOptions}
//         value={selectedOptions}
//         onChange={handleDropdownChange}
//       />
//       <HighchartsReact
//         highcharts={Highcharts}
//         options={updateChartSeries(selectedOptions)}
//       />
//     </div>
//   );
// };

// export default TimeSeriesChart;
// import React, { useState, useEffect } from "react";
// import Highcharts, { Options } from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import Select, { ValueType, OptionTypeBase } from "react-select";
// import axios from "axios";
// // import json from "./json";

// interface SeriesData {
//   name: string;
//   data: [number, number][];
// }

// interface ApiData {
//   [key: string]: string;
// }

// interface TimeSeriesChartProps {}

// const TimeSeriesChart: React.FC<TimeSeriesChartProps> = () => {
//   const [selectedOptions, setSelectedOptions] = useState<
//     ValueType<OptionTypeBase>
//   >([]);
//   const [seriesData, setSeriesData] = useState<SeriesData[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://10.0.5.22:8080/getTagInfo");
//         const apiData: ApiData = response.data;
//         const data_mock = {"1":"Sensor01Tof","2":"Sensor01PtP","3":"Sensor02Tof","4":"Sensor02PtP","5":"Sensor03Tof","6":"Sensor03PtP","7":"Sensor04Tof","8":"Sensor04PtP","9":"Sensor05Tof","10":"Sensor05PtP","11":"ConcentricityOffset","12":"ProfileOffset","13":"ANYFAULT","14":"SampleTime","15":"StatusWord","16":"EulerAngles_Roll","17":"EulerAngles_Pitch","18":"EulerAngles_Yaw","19":"DeltaV_X","20":"DeltaV_Y","21":"DeltaV_Z","22":"RateOfTurn_gyrX","23":"RateOfTurn_gyrY","24":"RateOfTurn_gyrZ","25":"Acceleration_accX","26":"Acceleration_accY","27":"Acceleration_accZ","28":"MagneticField_magX","29":"MagneticField_magY","30":"MagneticField_magZ","31":"Error"}
//         const dropdownOptions: OptionTypeBase[] = Object.keys(data_mock).map(
//           (key) => ({
//             label: data_mock[key],
//             value: key
//           })
//         );
//         console.log(dropdownOptions, "api data");

//         setSeriesData(dropdownOptions);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleDropdownChange = (selectedOptions: ValueType<OptionTypeBase>) => {
//     setSelectedOptions(selectedOptions);
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   const options: Options = {
//     chart: {
//       type: "line"
//     },
//     title: {
//       text: "Multi-Line Chart with Dropdown"
//     },
//     xAxis: {
//       type: "datetime",
//       title: {
//         text: "Date"
//       }
//     },
//     yAxis: {
//       title: {
//         text: "Value"
//       }
//     },
//     series: seriesData
//   };

//   const updateChartSeries = (
//     selectedOptions: ValueType<OptionTypeBase>
//   ): Options => {
//     const selectedValues = (selectedOptions as OptionTypeBase[]).map(
//       (option) => option.value
//     );

//     const filteredSeries = seriesData.filter((series) =>
//       selectedValues.includes(series.value)
//     );

//     const updatedOptions: Options = {
//       ...options,
//       series: filteredSeries.map((series) => ({
//         ...series,
//         type: "line"
//       }))
//     };

//     return updatedOptions;
//   };

//   return (
//     <div>
//       <Select
//         isMulti
//         options={seriesData}
//         value={selectedOptions}
//         onChange={handleDropdownChange}
//       />
//       <HighchartsReact
//         highcharts={Highcharts}
//         options={updateChartSeries(selectedOptions)}
//       />
//     </div>
//   );
// };

// export default TimeSeriesChart;
// import React, { useState, useEffect } from "react";
// import Highcharts, { Options } from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import Select, { ValueType, OptionTypeBase } from "react-select";
// import axios from "axios";

// interface SeriesData {
//   name: string;
//   data: [number, number][];
// }

// interface ApiData {
//   [key: string]: string;
// }

// interface TimeSeriesChartProps {}

// const TimeSeriesChart: React.FC<TimeSeriesChartProps> = () => {
//   const chart_data = {
//     "1": {
//         "1684373384690": 495.6401,
//         "1684373253620": 133.62024,
//         "1684373515760": 395.22577,
//         "1684373450230": 50.11029,
//         "1684373319160": 128.05319,
//         "1684373253630": 462.1988,
//         "1684373384700": 250.56136,
// 	"1684373361160": 339.6675,
//         "1684373295630": 272.83838,
//         "1684373426700": 222.7184,
//         "1684373230080": 38.97418
//     },
// "2": {
//         "1684373384690": 30560.0,
//         "1684373253620": 37767.0,
//         "1684373515760": 28786.0,
//         "1684373450230": 31856.0,
//         "1684373319160": 63888.0,
//         "1684373253630": 35292.0,
// 	"1684373426700": 23720.0,
//         "1684373230080": 50176.0
//     }
// }

//   const [selectedOptions, setSelectedOptions] = useState<
//     ValueType<OptionTypeBase>
//   >([]);
//   const [seriesData, setSeriesData] = useState<SeriesData[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://10.0.5.22:8080/getTagInfo", {
//           headers: {
//             "Content-Type": "application/json"
//           }
//         });
//         const apiData: ApiData = response.data;
//         const data_mock = {
//           "1": "Sensor01Tof",
//           "2": "Sensor01PtP",
//           "3": "Sensor02Tof",
//           "4": "Sensor02PtP",
//           "5": "Sensor03Tof",
//           "6": "Sensor03PtP",
//           "7": "Sensor04Tof",
//           "8": "Sensor04PtP",
//           "9": "Sensor05Tof",
//           "10": "Sensor05PtP",
//           "11": "ConcentricityOffset",
//           "12": "ProfileOffset",
//           "13": "ANYFAULT",
//           "14": "SampleTime",
//           "15": "StatusWord",
//           "16": "EulerAngles_Roll",
//           "17": "EulerAngles_Pitch",
//           "18": "EulerAngles_Yaw",
//           "19": "DeltaV_X",
//           "20": "DeltaV_Y",
//           "21": "DeltaV_Z",
//           "22": "RateOfTurn_gyrX",
//           "23": "RateOfTurn_gyrY",
//           "24": "RateOfTurn_gyrZ",
//           "25": "Acceleration_accX",
//           "26": "Acceleration_accY",
//           "27": "Acceleration_accZ",
//           "28": "MagneticField_magX",
//           "29": "MagneticField_magY",
//           "30": "MagneticField_magZ",
//           "31": "Error"
//         };
//         console.log(data_mock, "data mock");
//         const dropdownOptions: OptionTypeBase[] = Object.keys(data_mock).map(
//           (key) => ({
//             label: data_mock[key],
//             value: key
//           })
//         );

//         console.log(dropdownOptions, "api data");

//         setSeriesData(dropdownOptions);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleDropdownChange = (selectedOptions: ValueType<OptionTypeBase>) => {
//     console.log(selectedOptions, "selecdted options from dropdown");
//     setSelectedOptions(selectedOptions);
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   const options: Options = {
//     chart: {
//       type: "line"
//     },
//     title: {
//       text: "Multi-Line Chart with Dropdown"
//     },
//     xAxis: {
//       type: "datetime",
//       title: {
//         text: "Date"
//       }
//     },
//     yAxis: {
//       title: {
//         text: "Value"
//       }
//     },
//     series: seriesData
//   };

//   const updateChartSeries = (
//     selectedOptions: ValueType<OptionTypeBase>
//   ): Options => {
//     const selectedValues = (selectedOptions as OptionTypeBase[]).map(
//       (option) => option.value
//     );

//     const filteredSeries = seriesData.filter((series) =>
//       selectedValues.includes(series.value)
//     );

//     const updatedOptions: Options = {
//       ...options,
//       series: filteredSeries.map((series) => ({
//         ...series,
//         type: "line"
//       }))
//     };

//     return updatedOptions;
//   };

//   return (
//     <div>
//       <Select
//         isMulti
//         options={seriesData}
//         value={selectedOptions}
//         onChange={handleDropdownChange}
//       />
//       <HighchartsReact
//         highcharts={Highcharts}
//         options={updateChartSeries(selectedOptions)}
//       />
//     </div>
//   );
// };

// export default TimeSeriesChart;
import React, { useState, useEffect } from "react";
import Highcharts, { Options } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Select, { ValueType, OptionTypeBase } from "react-select";
import axios from "axios";

interface SeriesData {
  name: string;
  data: [number, number][];
}

interface ApiData {
  [key: string]: string;
}

interface TimeSeriesChartProps {}

const TimeSeriesChart: React.FC<TimeSeriesChartProps> = () => {
  const chart_data = {
    "1": {
      "1684373384690": 495.6401,
      "1684373253620": 133.62024,
      "1684373515760": 395.22577,
      "1684373450230": 50.11029,
      "1684373319160": 128.05319,
      "1684373253630": 462.1988,
      "1684373384700": 250.56136,
      "1684373361160": 339.6675,
      "1684373295630": 272.83838,
      "1684373426700": 222.7184,
      "1684373230080": 38.97418
    },
    "2": {
      "1684373384690": 30560.0,
      "1684373253620": 37767.0,
      "1684373515760": 28786.0,
      "1684373450230": 31856.0,
      "1684373319160": 63888.0,
      "1684373253630": 35292.0,
      "1684373426700": 23720.0,
      "1684373230080": 50176.0
    }
  };

  const [selectedOptions, setSelectedOptions] = useState<
    ValueType<OptionTypeBase>
  >([]);
  const [seriesData, setSeriesData] = useState<SeriesData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://10.0.5.22:8080/getTagInfo");
        const apiData: ApiData = response.data;
        const data_mock = {
          "1": "Sensor01Tof",
          "2": "Sensor01PtP",
          "3": "Sensor02Tof",
          "4": "Sensor02PtP",
          "5": "Sensor03Tof",
          "6": "Sensor03PtP",
          "7": "Sensor04Tof",
          "8": "Sensor04PtP",
          "9": "Sensor05Tof",
          "10": "Sensor05PtP",
          "11": "ConcentricityOffset",
          "12": "ProfileOffset",
          "13": "ANYFAULT",
          "14": "SampleTime",
          "15": "StatusWord",
          "16": "EulerAngles_Roll",
          "17": "EulerAngles_Pitch",
          "18": "EulerAngles_Yaw",
          "19": "DeltaV_X",
          "20": "DeltaV_Y",
          "21": "DeltaV_Z",
          "22": "RateOfTurn_gyrX",
          "23": "RateOfTurn_gyrY",
          "24": "RateOfTurn_gyrZ",
          "25": "Acceleration_accX",
          "26": "Acceleration_accY",
          "27": "Acceleration_accZ",
          "28": "MagneticField_magX",
          "29": "MagneticField_magY",
          "30": "MagneticField_magZ",
          "31": "Error"
        };

        const dropdownOptions: OptionTypeBase[] = Object.keys(data_mock).map(
          (key) => ({
            label: data_mock[key],
            value: key
          })
        );

        setSeriesData(dropdownOptions);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDropdownChange = (selectedOptions: ValueType<OptionTypeBase>) => {
    setSelectedOptions(selectedOptions);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const options: Options = {
    chart: {
      type: "line"
    },
    title: {
      text: "Multi-Line Chart with Dropdown"
    },
    xAxis: {
      type: "datetime",
      title: {
        text: "Date"
      }
    },
    yAxis: {
      title: {
        text: "Value"
      }
    },
    series: seriesData.map((series) => ({
      ...series,
      data: Object.entries(
        chart_data[series.value]
      ).map(([timestamp, value]) => [parseInt(timestamp), value])
    }))
  };

  const updateChartSeries = (
    selectedOptions: ValueType<OptionTypeBase>
  ): Options => {
    const selectedValues = (selectedOptions as OptionTypeBase[]).map(
      (option) => option.value
    );

    const filteredSeries = seriesData.filter((series) =>
      selectedValues.includes(series.value)
    );

    const updatedOptions: Options = {
      ...options,
      series: filteredSeries.map((series) => ({
        ...series,
        type: "line",
        data: Object.entries(
          chart_data[series.value]
        ).map(([timestamp, value]) => [parseInt(timestamp), value])
      }))
    };

    return updatedOptions;
  };

  return (
    <div>
      <Select
        isMulti
        options={seriesData}
        value={selectedOptions}
        onChange={handleDropdownChange}
      />
      <HighchartsReact
        highcharts={Highcharts}
        options={updateChartSeries(selectedOptions)}
      />
    </div>
  );
};

export default TimeSeriesChart;
