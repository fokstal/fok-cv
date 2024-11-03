class GitHubFetcher {
    static fetcherUrl = "https://api.github.com/";
    static async getReposByUsernameAsync(username) {
        try {
            const reposResp = await fetch(`${this.fetcherUrl}/users/${username}/repos`);
            if (!reposResp.ok)
                throw new Error(`Fetch repos from GitHub by username '${username}' failed!`);
            return await reposResp.json();
        }
        catch (err) {
            console.error("Error: ", err);
        }
    }
    static async getCommitsByRepoFullnameAsync(repoFullname) {
        try {
            const commitsByRepoResp = await fetch(`${this.fetcherUrl}/repos/${repoFullname}/commits`);
            if (!commitsByRepoResp.ok)
                throw new Error(`Fetch commits by repo '${repoFullname}' failed!`);
            return await commitsByRepoResp.json();
        }
        catch (err) {
            console.error("Error: ", err);
        }
    }
}
export default GitHubFetcher;
