const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function twoSums(nums, target) {
    return new Promise((resolve, reject) => {
        let numList = {};
        for (let i = 0; i < nums.length; i++) {
            let diffNums = target - nums[i];
            if (diffNums in numList) {
                resolve([numList[diffNums], i]);
                return;
            }
            numList[nums[i]] = i;
        }
        reject("Solusi Tidak ditemukan");
    });
}

rl.question('Masukkan target value: ', (target) => {
  rl.question('Masukkan List angka (ex: 1,2,3,4): ', async (nums) => {
    let numsArr = nums.split(',').map(num => parseInt(num));
    let result = await twoSums(numsArr, target).catch(err => err);
    console.log("Hasil:", result);
    rl.close();
  });
});