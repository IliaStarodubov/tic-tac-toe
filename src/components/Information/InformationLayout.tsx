import styles from './information.module.css';
interface FieldProps {
	currentPlayer: string;
	isGameEnded: boolean;
	isDraw: boolean;
}

export const InformationLayout: React.FC<FieldProps> = ({
	currentPlayer,
	isDraw,
	isGameEnded,
}) => {
	let massage = '';

	if (isDraw) {
		massage = 'Ничья';
	} else if (!isDraw && isGameEnded) {
		massage = `Победа: ${currentPlayer}`;
	} else if (!isDraw && !isGameEnded) {
		massage = `Ходит: ${currentPlayer}`;
	}

	return <div className={styles.information}>{massage}</div>;
};
