//Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes
function getVoteCount(votes) {
	const { upvotes, downvotes } = votes
	return  upvotes - downvotes
}