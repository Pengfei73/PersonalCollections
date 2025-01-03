function binarySearch(nums, target) {
    if (!nums || nums.length === 0) {
        return -1;
    }

    let start = 0;
    let end = nums.length - 1;

    while (start + 1 < end) {
        const mid = start + ((end - start) >> 1);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            start = mid;
        } else {
            end = mid;
        }
    }

    if (nums[start] === target) {
        return start;
    }

    if (nums[end] === target) {
        return end;
    }

    return -1;
}