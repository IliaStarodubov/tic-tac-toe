import { FieldLayout } from './FieldLayout';

interface FieldProps {
	field: string[];
	onCellClick: (index: number) => void;
}

export const FieldContainer: React.FC<FieldProps> = ({ field, onCellClick }) => {
	return <FieldLayout onCellClick={onCellClick} field={field} />;
};
