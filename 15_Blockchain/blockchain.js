const Block = require("./block");


class Blockchain{

    constructor(){
        this.chain = [Block.genesis()];  // Am Anfang war ...
    }

    addBlock(){
        const block = Block.mineBlock();
        this.chain.push(block);
        return block;
    }

} // EoC

module.exports = Blockchain;
