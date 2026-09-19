export default async function handler(req, res) {
    const username = "Ankit_Hazra";

    try {
        const query = `
            query userProfile($username: String!) {

                matchedUser(username: $username) {

                    username

                    profile {
                        realName
                        ranking
                        reputation
                        userAvatar
                    }

                    submitStats {

                        acSubmissionNum {
                            difficulty
                            count
                            submissions
                        }

                    }

                    submissionCalendar
                }

                userContestRanking(username: $username) {

                    attendedContestsCount
                    rating
                    globalRanking
                    topPercentage

                }
            }
        `;

        const response = await fetch(
            "https://leetcode.com/graphql/",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "User-Agent": "Mozilla/5.0",
                    "Referer": "https://leetcode.com/"
                },

                body: JSON.stringify({
                    query,
                    variables: {
                        username
                    }
                })
            }
        );

        const data = await response.json();

        if (!response.ok || data.errors) {
            console.error(
                "LeetCode API error:",
                data
            );

            return res.status(500).json({
                error: "Failed to fetch LeetCode statistics"
            });
        }

        const user = data.data.matchedUser;
        const contest =
            data.data.userContestRanking;

        if (!user) {
            return res.status(404).json({
                error: "LeetCode user not found"
            });
        }


        /* =========================================
           SOLVED STATISTICS
        ========================================= */

        const stats =
            user.submitStats.acSubmissionNum;

        const getCount = (difficulty) => {

            const item = stats.find(
                stat =>
                    stat.difficulty === difficulty
            );

            return item
                ? item.count
                : 0;
        };


        /* =========================================
           SUBMISSION CALENDAR
        ========================================= */

        let submissionCalendar = {};

        try {

            submissionCalendar =
                JSON.parse(
                    user.submissionCalendar || "{}"
                );

        } catch (error) {

            console.error(
                "Failed to parse LeetCode calendar:",
                error
            );

            submissionCalendar = {};
        }


        /*
         * Convert:
         *
         * {
         *   "1726185600": 3,
         *   "1726272000": 5
         * }
         *
         * into:
         *
         * [
         *   {
         *      date: "2026-09-13",
         *      count: 3
         *   }
         * ]
         */

        const calendar = Object.entries(
            submissionCalendar
        ).map(([timestamp, count]) => {

            const date = new Date(
                Number(timestamp) * 1000
            );

            return {
                date:
                    date.toISOString()
                        .split("T")[0],

                count: Number(count)
            };

        });


        /* =========================================
           RESPONSE
        ========================================= */

        return res.status(200).json({

            username: user.username,

            realName:
                user.profile.realName,

            avatar:
                user.profile.userAvatar,

            ranking:
                user.profile.ranking,

            reputation:
                user.profile.reputation,


            /* Problems */

            solved:
                getCount("All"),

            easy:
                getCount("Easy"),

            medium:
                getCount("Medium"),

            hard:
                getCount("Hard"),


            /* Contest */

            rating:
                contest?.rating || 0,

            globalRanking:
                contest?.globalRanking || 0,

            topPercentage:
                contest?.topPercentage || 0,

            attendedContests:
                contest?.attendedContestsCount || 0,


            /* Calendar */

            submissionCalendar:
                calendar

        });

    } catch (error) {

        console.error(
            "LeetCode error:",
            error
        );

        return res.status(500).json({
            error: "LeetCode API request failed"
        });
    }
}