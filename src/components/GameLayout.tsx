import { FieldContainer } from './Field/FieldContainer';
import { InformationContainer } from './Information/InformationContainer';
import styles from '../game.module.css';

interface FieldProps {
	currentPlayer: string;
	isGameEnded: boolean;
	isDraw: boolean;
	field: string[];
	onCellClick: (index: number) => void;
}

export const GameLayout: React.FC<FieldProps> = ({
	currentPlayer,
	isGameEnded,
	isDraw,
	field,
	onCellClick,
}) => {
	return (
		<div className={styles.fileds}>
			<InformationContainer
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
			/>
			<FieldContainer onCellClick={onCellClick} field={field} />
		</div>
	);
};
