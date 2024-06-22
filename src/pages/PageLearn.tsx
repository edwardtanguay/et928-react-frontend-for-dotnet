import { useEffect, useState } from "react";
import { WeatherInfo } from "../types";

const url = "http://localhost:5000/info";

export const PageLearn = () => {
	const [weatherInfos, setWeatherInfos] = useState<WeatherInfo[]>(
		[] as WeatherInfo[]
	);

	useEffect(() => {
		(async () => {
			const response = await fetch(url);
			const _weatherInfos = await response.json();
			console.log(111, _weatherInfos);
			setWeatherInfos(_weatherInfos);
		})();
	}, []);

	return (
		<>
			<h1 className="mb-3 text-xl">There are {weatherInfos.length} weather infos:</h1>
			<ul>
				<>
					{weatherInfos.map((weatherInfo, index) => {
						return <li key={index} className="mb-2">{weatherInfo.date} = {weatherInfo.temperatureC}°C</li>;
					})}
				</>
			</ul>
		</>
	);
}
