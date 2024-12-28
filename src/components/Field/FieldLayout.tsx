import styles from './field.module.css';

interface FieldProps {
	field: string[];
	onCellClick: (index: number) => void;
}

export const FieldLayout: React.FC<FieldProps> = ({ field, onCellClick }) => {
	return (
		<div className={styles.board}>
			{field.map((value, index) => {
				return (
					<button
						key={index}
						onClick={() => {
							onCellClick(index);
						}}
						className={styles.box}
					>
						{value}
					</button>
				);
			})}
		</div>
	);
};
