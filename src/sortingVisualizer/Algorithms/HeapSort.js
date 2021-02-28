export function getHeapSortAnimations(array) {
    let animations = [];
    if (array.length <= 1) return array;
    heapSort(array, 0, array.length-1, animations);
    return animations;
}
function heapSort(arr, k,n,animations) {
    for (let i = n / 2 - 1; i >= 0; i--) 
        heapify(arr, n, i); 
  
    // One by one extract an element from heap 
    for (let i=n-1; i>0; i--) 
    { 
        // Move current root to end 
        swap(arr[0], arr[i]); 
  
        // call max heapify on the reduced heap 
        heapify(arr, i, 0,animations); 
    } 

}
function swap(array, array2) {
    
    var temp= array;
	array2 = array;
	array = temp;
}
function heapify(arr,n, i ,animations) 
{ 
    let largest = i; // Initialize largest as root 
    let l = 2*i + 1; // left = 2*i + 1 
    let r = 2*i + 2; // right = 2*i + 2 
  
    // If left child is larger than root 
    if (l < n && arr[l] > arr[largest]) 
        largest = l; 
  
    // If right child is larger than largest so far 
    if (r < n && arr[r] > arr[largest]) 
        largest = r; 
  
    // If largest is not root 
    if (largest !== i) 
    { 
        swap(arr[i], arr[largest]); 
  
        // Recursively heapify the affected sub-tree 
        heapify(arr, n, largest,animations); 
    } 
} 
