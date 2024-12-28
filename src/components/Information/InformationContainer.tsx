import { InformationLayout } from './InformationLayout';

interface FieldProps {
	currentPlayer: string;
	isGameEnded: boolean;
	isDraw: boolean;
}

export const InformationContainer: React.FC<FieldProps> = ({
	isDraw,
	isGameEnded,
	currentPlayer,
}) => {
	return (
		<InformationLayout
			currentPlayer={currentPlayer}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
		/>
	);
};
