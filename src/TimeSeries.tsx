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
  const [selectedOptions, setSelectedOptions] = useState<
    ValueType<OptionTypeBase>
  >([]);
  const [seriesData, setSeriesData] = useState<SeriesData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://10.0.5.22:8080/getTagInfo");
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

        console.log(dropdownOptions, "api data");

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
    series: seriesData
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
        type: "line"
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
s;
