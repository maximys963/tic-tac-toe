export function useTicToeElement(setCellValue, setAiValue) {

    const handleCellClick = (rowIndex, cellIndex, value) => {
        setCellValue(rowIndex, cellIndex, value);
        setAiValue();
    }

    return {
        handleCellClick
    }
}
