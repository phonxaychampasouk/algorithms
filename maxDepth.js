var maxDepth = function(root) {
if (!root) {return null};
    let max = Math.max(maxDepth(root.left), maxDepth(root.right));
    return max + 1;
};


/*

    3
   / \
  9  20
    /  \
   15   7


*/
