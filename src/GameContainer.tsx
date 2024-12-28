import { useState } from 'react';
import { GameLayout } from './components/GameLayout';
import styles from './game.module.css';

export const GameContainer: React.FC = () => {
	const [currentPlayer, setCurrentPlayer] = useState<'X' | '0'>('X');
	const [isGameEnded, setIsGameEnded] = useState<boolean>(false);
	const [isDraw, setIsDraw] = useState<boolean>(false);
	const [field, setField] = useState<string[]>(Array(9).fill(''));

	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8],
		[2, 4, 6], // Варианты побед по диагонали
	];

	const handleCellClick = (index: number) => {
		if (field[index] === '' && isGameEnded === false) {
			field[index] = currentPlayer;
			setField(field);

			if (checkWinner(field)) {
				setIsGameEnded(true);
			} else if (!checkWinner(field) && field.includes('')) {
				setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
			} else if (!checkWinner(field) && !field.includes('')) {
				setIsDraw(true);
			}
		}
	};

	const checkWinner = (field: string[]) => {
		return WIN_PATTERNS.some((pattern) => {
			const [a, b, c] = pattern;
			return field[a] && field[a] === field[b] && field[a] === field[c];
		});
	};

	const resetGame = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(Array(9).fill(''));
	};

	return (
		<div className={styles.container}>
			<button className={styles.restart} onClick={resetGame}>
				Начать заново
			</button>
			<GameLayout
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
				field={field}
				onCellClick={handleCellClick}
			/>
		</div>
	);
};
