module.exports = function longestConsecutiveLength(array) {
    if (array.length === 0) return 0;

    function Numsort(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    }

    let count = 1;
    let max_count = 1;
    let sorted_arr = array.sort(Numsort);
    let set = new Set();
    set.add(sorted_arr[0]);

    for (let i = 1, length = sorted_arr.length; i < length; i++){
        if (sorted_arr[i] - sorted_arr[i-1] === 1 || sorted_arr[i] - sorted_arr[i-1] === 0 ) {
            set.add(sorted_arr[i]);
            count = set.size;
            if (count > max_count){ max_count = count; }
        }
        else {
            if (count >= max_count) { max_count = count; }
            set.clear();
            set.add(sorted_arr[i]);
            count = 1;
        }
    }
    return max_count;
}