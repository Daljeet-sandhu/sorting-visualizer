export function getBubbleSortAnimations(array) {
    let animations = [];
    if (array.length <= 1) return array;
    bubbleSort(array, animations)
    console.log(array);
    return animations;
}

function swap(array, left_int, right_int, animations) {
    //Value that I'm highlighting red so the user knows we're considering
    animations.push([left_int, right_int, 0])
    //Highlighting back to primary color
    animations.push([left_int, right_int, 1])
    // Swapping the heights of both values here
    animations.push([left_int, array[left_int], right_int, array[right_int]])
    let temp = array[left_int];
    array[left_int] = array[right_int];
    array[right_int] = temp;
}

function bubbleSort(
    array,
    animations
) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length-1; j++) {
            if (array[j] > array[j+1]) {
                swap(array, j, j+1, animations);
            } else {
            }
        }
    }
    return array;
}