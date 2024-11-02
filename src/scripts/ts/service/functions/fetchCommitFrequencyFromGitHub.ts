type YearToCommitCount = {
    [key: string]: number
}

async function fetchCommitFrequencyFromGitHub(username: string): Promise<YearToCommitCount> {
    const yearToCommitCountList: YearToCommitCount = {};

    try {
        const reposResp = await fetch(`https://api.github.com/users/${username}/repos`);

        if (!reposResp.ok)
            throw new Error(`Fetch repos from GitHub by username '${username}' failed!`);

        const repos = await reposResp.json();

        for (const repo of repos) {
            try {
                const commitsByRepoResp = await fetch(`https://api.github.com/repos/${repo.full_name}/commits`);

                if (!commitsByRepoResp.ok)
                    throw new Error(`Fetch commits by repo '${repo.full_name}' failed!`)

                const commitsByRepo = await commitsByRepoResp.json();

                for (const commit of commitsByRepo) {
                    const year = new Date(commit.commit.committer.date).getFullYear();
                    yearToCommitCountList[year] = (yearToCommitCountList[year] || 0) + 1;
                }
            }
            catch (err) {
                console.error("Error: ", err);
            }
        }
    }
    catch (err) {
        console.error("Error: ", err);
    }

    return yearToCommitCountList;
}

export default fetchCommitFrequencyFromGitHub;