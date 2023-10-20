let dna = require("../dna.json");

let START_CODON = "atg";
let END_CODON = "taa";

let startIndex = dna.indexOf(START_CODON);
let endIndex = startIndex;

let foundeGene;

while (!foundeGene) {
  endIndex = dna.indexOf(END_CODON, endIndex + 3);
  let geneCandidate = dna.slice(startIndex, endIndex + 3);

  if (geneCandidate.length % 3 === 0) {
    foundeGene = geneCandidate;
  }

  if (endIndex === -1) {
    foundeGene = "No gene";
  }
}

console.log(foundeGene);
