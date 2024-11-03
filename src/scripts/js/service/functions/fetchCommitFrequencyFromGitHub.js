import GitHubFetcher from "../GitHubFetcher.js";
async function fetchCommitFrequencyFromGitHub(username) {
    const yearToCommitCountList = {};
    try {
        const repos = await GitHubFetcher.getReposByUsernameAsync(username);
        for (const repo of repos) {
            const commitsByRepo = await GitHubFetcher.getCommitsByRepoFullnameAsync(repo.full_name);
            for (const commit of commitsByRepo) {
                const year = new Date(commit.commit.committer.date).getFullYear();
                yearToCommitCountList[year] = (yearToCommitCountList[year] || 0) + 1;
            }
        }
    }
    catch (err) {
        console.error("Error: ", err);
    }
    return yearToCommitCountList;
}
export default fetchCommitFrequencyFromGitHub;
