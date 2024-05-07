
export class Frame {
    constructor(tree) {
        this.tree = tree;
    }
}

export default class Sequence {
    constructor() {
        this.frames = [];
    }

    addFrame(frame){
        this.frames.push(frame)
    }
}
