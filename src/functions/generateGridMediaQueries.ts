export default function generateGridMediaQueries(difference: number, totalMaxWidth: number) {

    let mediaQueries = '';
    let currentThreshold = difference;
    let index = 1;

    while (currentThreshold < totalMaxWidth) {
        if (index === 1) {
            mediaQueries += `@media (max-width: ${currentThreshold}px) {grid-template-columns: repeat(${index}, auto)}`;
        } else {
            mediaQueries += `@media (min-width: ${currentThreshold - difference + 1}px) and (max-width: ${currentThreshold}px) {grid-template-columns: repeat(${index}, auto)}`;
        }
        index ++;
        currentThreshold += difference;
    }

    return mediaQueries;
}