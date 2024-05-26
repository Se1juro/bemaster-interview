const axios = require("axios");

async function getTopRepos(username) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`,
      {
        params: {
          per_page: 100,
          sort: "updated",
        },
      }
    );
    const repos = response.data;

    const sortedRepos = repos.sort(
      (a, b) => b.stargazers_count - a.stargazers_count
    );

    const topRepos = sortedRepos.slice(0, 10);

    topRepos.forEach((repo, index) => {
      console.log(
        `${index + 1}. ${repo.name} - ${repo.stargazers_count} estrellas`
      );
    });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

getTopRepos("google");
