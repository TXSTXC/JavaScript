

const samples = [4.2, 5.1, 3.8, 4.7, 5.3];

function calculationMean(samples) {
    let sum = 0;
    for (let i = 0; i < samples.length; i++) {
        sum += samples[i];
    }
    return sum / samples.length;
}

const mean = calculationMean(samples);
const meanRounded = Math.round(mean * 100) / 100;

const meanMessage = `The mean of the samples is ${meanRounded}.`;

console.log(meanMessage);