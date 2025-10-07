// Screenshot file path handler

const timeStamp = new Date().toISOString().replace(/[:.]/g, '-'); // generate timestamp now
const filePath = `test-results/Failing_Images/Fail_Img_${timeStamp}.png`;

module.exports = { filePath };