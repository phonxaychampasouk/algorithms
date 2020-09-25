const tiltTree = (root) = > {
	let total = 0;
const findTilt = (node) => {
if (node === undefined) { return 0;}
const left = findTilt(node.left);
const right = findtilt(node.right);
	total += Math.abs ( left - right );
		return node.val + left + right; 
}
fixedTilt(root);
return total;
}
