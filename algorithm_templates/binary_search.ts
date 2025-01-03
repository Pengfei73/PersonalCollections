function binarySearchTs<T>(arr: T[], target: T): number {
    if (!arr || arr.length === 0) {
        return -1;
    }

    let left = 0;
    let right = arr.length - 1;

    while (left + 1 < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid;
        } else {
            right = mid;
        }
    }

    if (arr[left] === target) {
        return left;
    }

    if (arr[right] === target) {
        return right;
    }

    return -1;
}