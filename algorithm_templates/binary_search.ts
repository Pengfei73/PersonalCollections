function binarySearch<T>(arr: T[], target: T): number {
    if (!arr || arr.length === 0) {
        return -1;
    }

    let left: number = 0;
    let right: number = arr.length - 1;

    while (left + 1 < right) {
        let mid: number = left + ((right - left) >> 1);
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