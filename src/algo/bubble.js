export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    bubbleSort(array, animations);
    return animations;
}

function bubbleSort(array, animations) {
    const n = array.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        
        for (let j = 0; j < n - i - 1; j++) {
            animations.push(['compare', j, j + 1, true]);

            if (array[j] > array[j + 1]) {
              
                animations.push(['swap', j, array[j + 1]]);
                animations.push(['swap', j + 1, array[j]]);
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapped = true;
            }

            animations.push(['compare', j, j + 1, false]);
        }

       
        if (!swapped) break;
    }
}
