export default async function handler(req, res) {
    const username = "AnkitHazra";

    try {
        const year = new Date().getFullYear();

        const from = `${year}-01-01T00:00:00Z`;
        const to = new Date().toISOString();

        const query = `
            query (
                $login: String!
                $from: DateTime!
                $to: DateTime!
            ) {
                user(login: $login) {
                    login
                    name
                    avatarUrl
                    url

                    followers {
                        totalCount
                    }

                    following {
                        totalCount
                    }

                    repositories(
                        ownerAffiliations: OWNER
                        privacy: PUBLIC
                        first: 100
                    ) {
                        totalCount
                    }

                    contributionsCollection(
                        from: $from
                        to: $to
                    ) {
                        totalCommitContributions
                        totalIssueContributions
                        totalPullRequestContributions
                        totalRepositoryContributions

                        contributionCalendar {
                            totalContributions

                            weeks {
                                contributionDays {
                                    date
                                    contributionCount
                                }
                            }
                        }
                    }
                }
            }
        `;

        const response = await fetch(
            "https://api.github.com/graphql",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization":
                        `Bearer ${process.env.GITHUB_TOKEN}`,
                    "User-Agent": "Ankit-Portfolio"
                },

                body: JSON.stringify({
                    query,
                    variables: {
                        login: username,
                        from,
                        to
                    }
                })
            }
        );

        const data = await response.json();

        if (!response.ok || data.errors) {
            console.error("GitHub API error:", data);

            return res.status(500).json({
                error: "Failed to fetch GitHub statistics"
            });
        }

        const user = data.data.user;

        if (!user) {
            return res.status(404).json({
                error: "GitHub user not found"
            });
        }

        const contributions =
            user.contributionsCollection.contributionCalendar;

        return res.status(200).json({
            username: user.login,
            name: user.name,
            avatar: user.avatarUrl,
            profile: user.url,

            year,

            contributions:
                contributions.totalContributions,

            contributionDays:
                contributions.weeks.flatMap(
                    week => week.contributionDays
                ),

            repositories:
                user.repositories.totalCount,

            followers:
                user.followers.totalCount,

            following:
                user.following.totalCount,

            commits:
                user.contributionsCollection
                    .totalCommitContributions,

            issues:
                user.contributionsCollection
                    .totalIssueContributions,

            pullRequests:
                user.contributionsCollection
                    .totalPullRequestContributions,

            repositoriesCreated:
                user.contributionsCollection
                    .totalRepositoryContributions
        });

    } catch (error) {
        console.error("GitHub error:", error);

        return res.status(500).json({
            error: "GitHub API request failed"
        });
    }
}