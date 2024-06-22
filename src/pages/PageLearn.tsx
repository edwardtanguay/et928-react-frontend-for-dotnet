import { useEffect, useState } from "react";

const url = "http://localhost:5000/info/learnItems";

export const PageLearn = () => {
	const [learnItems, setLearnItems] = useState<string[]>([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(url);
			const _learnItems = await response.json();
			setLearnItems(_learnItems);
		})();
	}, []);

	return (
		<>
			<h2 className="mb-3 text-xl">
				Here are the C# concepts you need to learn:
			</h2>
			<ul className="list-disc ml-6">
				{learnItems.map((learnItem, index) => {
					return (
						<li key={index} className="mb-2">
							{learnItem}
						</li>
					);
				})}
			</ul>
		</>
	);
};
