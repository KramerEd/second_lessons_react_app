export const countScore = (text: string) => {
	const regExp = /([^<@\>]+(?=>))|(:\w+:)/g;

	const matchedWords = text.match(regExp);

	let lastUser = "";
	let apples = 0;

	// if (matchedWords) {
	// 	const updatedScore = matchedWords.reduce(
	// 		(newObj: any, word: string) => {
	// 			if (word.startsWith(":")) {
	// 				if (word.includes("apple")) newObj[lastUser]++;
	// 			} else {
	// 				lastUser = word;
	// 				newObj[lastUser] = newObj[lastUser] || apples;
	// 			}

	// 			return newObj;
	// 		},
	// 		{}
	// 	);

	// 	return updatedScore;
	// }

	if (matchedWords) {
		const updatedScore = matchedWords.reduceRight(
			(newObj: any, word: string, index: number) => {
				if (word.startsWith(":")) {
					if (word.includes("apple")) {
						apples++;
					}
				} else {
					lastUser = word;
					newObj[lastUser] = newObj[lastUser] + apples || apples;
					if (index !== 0 && matchedWords[index - 1].startsWith(":"))
						apples = 0;
				}
				console.log(apples);

				return newObj;
			},
			{}
		);
		console.log(updatedScore);

		return updatedScore;
	}

	return {};
};
