var intersect = function(nums1, nums2) { // meu
    let i, arr = [], obj = {};
    
    if(nums1.length > nums2.length) {
       [nums1, nums2] = [nums2, nums1];
    }

    
    for(i of nums1) {
        obj[i] = (obj[i] || 0) + 1;
    }
    
    for(i of nums2) {
        if(obj[i] > 0){
            arr.push(i);
            obj[i]--;
        }
    }
    
    return arr;
};

var intersect = function(nums1, nums2) { // chat
    if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];

    const count = new Map();
    const result = [];

    for (let num of nums1) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    for (let num of nums2) {
        if (count.get(num) > 0) {
            result.push(num);
            count.set(num, count.get(num) - 1);
        }
    }

    return result;
};

var intersect = function(nums1, nums2) { // chat II
    nums1.sort((a,b)=>a-b);
    nums2.sort((a,b)=>a-b);
    let i = 0, j = 0;
    const result = [];

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            i++; j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return result;
};
