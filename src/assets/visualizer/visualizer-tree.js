export class VisualizerNodeLeaf {
  constructor() {
    this.keys = [];
  }

  addKey(value, highlighted=false) {
    this.keys.push({value, highlighted});
  }

  highlight(index=0) {
    this.keys[index].highlighted = true;
  }

  deEmphasize(index=0){
    this.keys[index].highlighted = false;
  }
}

export default class VisualizerTreeNode {
  constructor() {
    this.leaves = new VisualizerNodeLeaf;
    this.children = [];
  }

  appendChild(node){
    this.children.push(node)
  }
}
