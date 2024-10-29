async function getCommitFrequency(username) {
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await reposResponse.json();

    const commitCounts = {};

    for (const repo of repos) {
        const commitsResponse = await fetch(`https://api.github.com/repos/${repo.full_name}/commits`);
        const commits = await commitsResponse.json();

        for (const commit of commits) {
            const year = new Date(commit.commit.committer.date).getFullYear();
            commitCounts[year] = (commitCounts[year] || 0) + 1;
        }
    }

    return commitCounts;
}

export default getCommitFrequency;