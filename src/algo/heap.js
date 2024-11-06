export function getHeapSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    heapSort(array, animations);
    return animations;
}

function heapSort(array, animations) {
    const n = array.length;

   
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(array, n, i, animations);
    }

    
    for (let i = n - 1; i > 0; i--) {
        
        animations.push(['swap', 0, array[i]]);
        animations.push(['swap', i, array[0]]);
        [array[0], array[i]] = [array[i], array[0]];

        
        heapify(array, i, 0, animations);
    }
}

function heapify(array, n, i, animations) {
    let largest = i;  
    const left = 2 * i + 1;  
    const right = 2 * i + 2;  

   
    if (left < n) {
        animations.push(['compare', left, largest, true]);
        if (array[left] > array[largest]) {
            largest = left;
        }
        animations.push(['compare', left, largest, false]);
    }

    
    if (right < n) {
        animations.push(['compare', right, largest, true]);
        if (array[right] > array[largest]) {
            largest = right;
        }
        animations.push(['compare', right, largest, false]);
    }

    
    if (largest !== i) {
        animations.push(['swap', i, array[largest]]);
        animations.push(['swap', largest, array[i]]);
        [array[i], array[largest]] = [array[largest], array[i]];

        
        heapify(array, n, largest, animations);
    }
}
