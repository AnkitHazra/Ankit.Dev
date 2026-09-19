import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaCode, FaGitAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const CodingStats = () => {
  const [github, setGithub] = useState(null);
  const [leetcode, setLeetcode] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const [githubResponse, leetcodeResponse] = await Promise.all([
          fetch("/api/github"),
          fetch("/api/leetcode"),
        ]);

        if (!githubResponse.ok || !leetcodeResponse.ok) {
          throw new Error("Failed to load statistics");
        }

        const githubData = await githubResponse.json();

        const leetcodeData = await leetcodeResponse.json();

        setGithub(githubData);
        setLeetcode(leetcodeData);
      } catch (error) {
        console.error("Coding stats error:", error);

        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  if (loading) {
    return (
      <section
        id="coding-stats"
        className="
                    min-h-125
                    flex
                    items-center
                    justify-center
                    bg-[#faf8f5]
                "
      >
        <div className="text-center">
          <div
            className="
                            w-10
                            h-10
                            border-4
                            border-black/10
                            border-t-[#FFE600]
                            rounded-full
                            animate-spin
                            mx-auto
                        "
          />

          <p
            className="
                            mt-4
                            text-sm
                            text-black/40
                        "
          >
            Loading coding statistics...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="coding-stats"
        className="
                    py-24
                    bg-[#faf8f5]
                "
      >
        <div
          className="
                        max-w-5xl
                        mx-auto
                        px-4
                        text-center
                    "
        >
          <p className="text-black/50">Unable to load coding statistics.</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="coding-stats"
      className="
                relative
                py-24
                overflow-hidden
                bg-[#faf8f5]
            "
    >
      <div
        className="
                    relative
                    z-10
                    w-full
                    max-w-5xl
                    mx-auto
                    px-4
                    md:px-6
                "
      >
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: -30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
                        text-center
                        mb-12
                    "
        >
          <div
            className="
                            inline-flex
                            items-center
                            gap-2
                            mb-4
                        "
          >
            <span
              className="
                                w-8
                                h-0.5
                                bg-[#FFE600]
                            "
            />

            <span
              className="
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.25em]
                                text-black/40
                            "
            >
              Problem Solving & Open Source
            </span>

            <span
              className="
                                w-8
                                h-0.5
                                bg-[#FFE600]
                            "
            />
          </div>

          <h2
            className="
                            text-5xl
                            md:text-6xl
                            font-black
                            tracking-tight
                            text-black
                        "
          >
            Coding <span className="text-[#FFE600]">Activity</span>
          </h2>

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 80,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="
                            h-1
                            bg-black
                            mx-auto
                            mt-5
                            rounded-full
                        "
          />
        </motion.div>

        {/* ================= CARDS ================= */}

        <div
          className="
                        grid
                        grid-cols-1
                        lg:grid-cols-2
                        gap-6
                    "
        >
          <GithubCard data={github} />

          <LeetCodeCard data={leetcode} />
        </div>

        {/* Bottom accent */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="
                        flex
                        justify-center
                        mt-10
                    "
        >
          <div
            className="
                            flex
                            items-center
                            gap-2
                        "
          >
            <span
              className="
                                w-2
                                h-2
                                rounded-full
                                bg-black
                            "
            />

            <span
              className="
                                w-16
                                h-0.5
                                bg-[#FFE600]
                            "
            />

            <span
              className="
                                w-2
                                h-2
                                rounded-full
                                bg-black
                            "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ============================================================
   GITHUB CARD
============================================================ */

const GithubCard = ({ data }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
      }}
      whileHover={{
        y: -5,
      }}
      className="
                relative
                overflow-hidden
                rounded-3xl
                p-6
                md:p-8
                bg-linear-to-br
                from-[#fffdf0]
                via-[#fffbea]
                to-[#fff6b8]/60
                border
                border-[#FFE600]/30
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            "
    >
      {/* Top accent */}

      <div
        className="
                    absolute
                    top-0
                    left-0
                    right-0
                    h-1
                    bg-linear-to-r
                    from-transparent
                    via-[#FFE600]
                    to-transparent
                "
      />

      {/* Header */}

      <div
        className="
                    flex
                    items-start
                    justify-between
                    gap-4
                "
      >
        <div
          className="
                        flex
                        items-center
                        gap-3
                    "
        >
          <div
            className="
                            w-11
                            h-11
                            rounded-xl
                            bg-black
                            flex
                            items-center
                            justify-center
                            text-[#FFE600]
                        "
          >
            <FaGithub className="text-xl" />
          </div>

          <div>
            <p
              className="
                                text-xs
                                uppercase
                                tracking-[0.2em]
                                font-bold
                                text-black/40
                            "
            >
              Open Source
            </p>

            <h3
              className="
                                text-xl
                                font-black
                                text-black
                            "
            >
              GitHub
            </h3>
          </div>
        </div>

        <a
          href="https://github.com/AnkitHazra"
          target="_blank"
          rel="noopener noreferrer"
          className="
                        text-xs
                        font-bold
                        text-black/50
                        hover:text-black
                        transition-colors
                    "
        >
          View Profile ↗
        </a>
      </div>

      {/* Main contribution count */}

      <div className="mt-8">
        <div
          className="
                        flex
                        items-end
                        gap-2
                    "
        >
          <span
            className="
                            text-5xl
                            md:text-6xl
                            font-black
                            text-black
                        "
          >
            {data.contributions}
          </span>

          <span
            className="
                            text-sm
                            text-black/50
                            mb-2
                        "
          >
            Contributions
          </span>
        </div>

        <p
          className="
                        text-xs
                        uppercase
                        tracking-wider
                        text-black/40
                        mt-1
                    "
        >
          {data.year}
        </p>
      </div>

      {/* Contribution graph */}

      <div className="mt-7">
        <div
          className="
                        flex
                        justify-between
                        text-[10px]
                        text-black/40
                        mb-2
                    "
        >
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
          <span>Aug</span>
          <span>Sep</span>
          <span>Oct</span>
          <span>Nov</span>
          <span>Dec</span>
        </div>

        <ContributionGraph days={data.contributionDays} />
      </div>

      {/* Stats */}

      <div
        className="
                    grid
                    grid-cols-2
                    gap-3
                    mt-7
                "
      >
        <StatBox label="Repositories" value={data.repositories} />

        <StatBox label="Followers" value={data.followers} />

        <StatBox label="Commits" value={data.commits} />

        <StatBox label="Pull Requests" value={data.pullRequests} />
      </div>
    </motion.div>
  );
};

/* ============================================================
   GITHUB GRAPH
============================================================ */

const ContributionGraph = ({ days }) => {
  const getLevel = (count) => {
    if (count === 0) return 0;
    if (count <= 2) return 1;
    if (count <= 5) return 2;
    if (count <= 9) return 3;

    return 4;
  };

  return (
    <div
      className="
                overflow-hidden
                rounded-xl
                bg-white/60
                border
                border-black/5
                p-3
            "
    >
      <div
        className="
                    grid
                    grid-cols-26
                    gap-0.75
                "
      >
        {days.map((day, index) => {
          const level = getLevel(day.contributionCount);

          return (
            <div
              key={`${day.date}-${index}`}
              title={`${day.contributionCount} contributions on ${day.date}`}
              className={`
                                aspect-square
                                rounded-[3px]
                                border
                                border-black/5
                                transition-transform
                                duration-150
                                hover:scale-125
                                ${level === 0 ? "bg-black/4" : ""}
                                ${level === 1 ? "bg-[#fff3a3]" : ""}
                                ${level === 2 ? "bg-[#ffe85c]" : ""}
                                ${level === 3 ? "bg-[#FFE600]" : ""}
                                ${level === 4 ? "bg-black" : ""}
                            `}
            />
          );
        })}
      </div>
    </div>
  );
};

/* ============================================================
   LEETCODE CARD
============================================================ */
const LeetCodeCalendar = ({ data = [] }) => {
  /*
   * Create a map:
   *
   * "2026-09-18" → 5
   * "2026-09-17" → 2
   *
   * This makes lookup extremely fast.
   */

  const submissionMap = new Map(data.map((item) => [item.date, item.count]));

  /* =========================================
       LAST 365 DAYS
    ========================================= */

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const startDate = new Date(today);

  startDate.setDate(startDate.getDate() - 364);

  /*
   * Move the start backwards so that the
   * calendar starts on Sunday.
   */

  const firstDay = new Date(startDate);

  firstDay.setDate(firstDay.getDate() - firstDay.getDay());

  /* =========================================
       BUILD DAYS
    ========================================= */

  const days = [];

  const current = new Date(firstDay);

  while (current <= today) {
    const dateString = current.toISOString().split("T")[0];

    days.push({
      date: dateString,

      count: submissionMap.get(dateString) || 0,
    });

    current.setDate(current.getDate() + 1);
  }

  /* =========================================
       ACTIVITY LEVEL
    ========================================= */

  const getLevel = (count) => {
    if (count === 0) return 0;

    if (count <= 1) return 1;

    if (count <= 3) return 2;

    if (count <= 6) return 3;

    return 4;
  };

  /* =========================================
       MONTH LABELS
    ========================================= */

  const monthLabels = [];

  let previousMonth = -1;

  days.forEach((day, index) => {
    const date = new Date(`${day.date}T00:00:00`);

    const month = date.getMonth();

    const dayOfMonth = date.getDate();

    if (month !== previousMonth && dayOfMonth <= 7) {
      monthLabels.push({
        index,
        name: date.toLocaleString("en-US", {
          month: "short",
        }),
      });

      previousMonth = month;
    }
  });

  return (
    <div
      className="
                overflow-hidden
                rounded-xl
                bg-white/60
                border
                border-black/5
                p-3
            "
    >
      {/* Month labels */}

      <div
        className="
                    relative
                    h-4
                    mb-1
                "
      >
        {monthLabels.map((month, index) => (
          <span
            key={index}
            className="
                                absolute
                                text-[9px]
                                text-black/35
                            "
            style={{
              left: `${(month.index / days.length) * 100}%`,
            }}
          >
            {month.name}
          </span>
        ))}
      </div>

      {/* Calendar */}

      <div
        className="
                    overflow-x-auto
                    scrollbar-hide
                "
      >
        <div
          className="
                        grid
                        grid-flow-col
                        grid-rows-7
                        auto-cols-2.5
                        gap-0.75
                        min-w-max
                    "
        >
          {days.map((day, index) => {
            const level = getLevel(day.count);

            return (
              <div
                key={`${day.date}-${index}`}
                title={`${day.count} submission${
                  day.count === 1 ? "" : "s"
                } on ${day.date}`}
                className={`
                                        w-2.5
                                        h-2.5
                                        rounded-[3px]
                                        border
                                        border-black/5
                                        transition-all
                                        duration-150
                                        hover:scale-125
                                        cursor-default

                                        ${level === 0 ? "bg-black/4" : ""}

                                        ${level === 1 ? "bg-[#fff5b8]" : ""}

                                        ${level === 2 ? "bg-[#ffed70]" : ""}

                                        ${level === 3 ? "bg-[#FFE600]" : ""}

                                        ${level === 4 ? "bg-black" : ""}
                                    `}
              />
            );
          })}
        </div>
      </div>

      {/* Legend */}

      <div
        className="
                    flex
                    items-center
                    justify-end
                    gap-1
                    mt-2
                "
      >
        <span
          className="
                        text-[9px]
                        text-black/30
                        mr-1
                    "
        >
          Less
        </span>

        <span
          className="
                        w-2.25
                        h-2.25
                        rounded-xs
                        bg-black/4
                        border
                        border-black/5
                    "
        />

        <span
          className="
                        w-2.25
                        h-2.25
                        rounded-xs
                        bg-[#fff5b8]
                    "
        />

        <span
          className="
                        w-2.25
                        h-2.25
                        rounded-xs
                        bg-[#ffed70]
                    "
        />

        <span
          className="
                        w-2.25
                        h-2.25
                        rounded-xs
                        bg-[#FFE600]
                    "
        />

        <span
          className="
                        w-2.25
                        h-2.25
                        rounded-xs
                        bg-black
                    "
        />

        <span
          className="
                        text-[9px]
                        text-black/30
                        ml-1
                    "
        >
          More
        </span>
      </div>
    </div>
  );
};
const LeetCodeCard = ({ data }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        delay: 0.1,
      }}
      whileHover={{
        y: -5,
      }}
      className="
                relative
                overflow-hidden
                rounded-3xl
                p-6
                md:p-8
                bg-linear-to-br
                from-[#fffdf0]
                via-[#fffbea]
                to-[#fff6b8]/60
                border
                border-[#FFE600]/30
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            "
    >
      {/* Top accent */}

      <div
        className="
                    absolute
                    top-0
                    left-0
                    right-0
                    h-1
                    bg-linear-to-r
                    from-transparent
                    via-[#FFE600]
                    to-transparent
                "
      />

      {/* Header */}

      <div
        className="
                    flex
                    items-start
                    justify-between
                    gap-4
                "
      >
        <div
          className="
                        flex
                        items-center
                        gap-3
                    "
        >
          <div
            className="
                            w-11
                            h-11
                            rounded-xl
                            bg-black
                            flex
                            items-center
                            justify-center
                            text-[#FFE600]
                        "
          >
            <SiLeetcode className="text-xl" />
          </div>

          <div>
            <p
              className="
                                text-xs
                                uppercase
                                tracking-[0.2em]
                                font-bold
                                text-black/40
                            "
            >
              Problem Solving
            </p>

            <h3
              className="
                                text-xl
                                font-black
                                text-black
                            "
            >
              LeetCode
            </h3>
          </div>
        </div>

        <a
          href="https://leetcode.com/u/Ankit_Hazra/"
          target="_blank"
          rel="noopener noreferrer"
          className="
                        text-xs
                        font-bold
                        text-black/50
                        hover:text-black
                        transition-colors
                    "
        >
          View Profile ↗
        </a>
      </div>

      {/* Solved */}

      <div className="mt-8">
        <div
          className="
                        flex
                        items-end
                        gap-2
                    "
        >
          <span
            className="
                            text-5xl
                            md:text-6xl
                            font-black
                            text-black
                        "
          >
            {data.solved}
          </span>

          <span
            className="
                            text-sm
                            text-black/50
                            mb-2
                        "
          >
            Problems Solved
          </span>
        </div>
      </div>
      {/* LeetCode Submission Calendar */}

      <div className="mt-7">
        <div
          className="
            flex
            items-center
            justify-between
            mb-2
        "
        >
          <span
            className="
                text-[10px]
                uppercase
                tracking-wider
                text-black/40
            "
          >
            Submission Activity
          </span>

          <span
            className="
                text-[10px]
                text-black/30
            "
          >
            Last Year
          </span>
        </div>

        <LeetCodeCalendar data={data.submissionCalendar} />
      </div>

      {/* Difficulty */}

      <div
        className="
                    grid
                    grid-cols-3
                    gap-3
                    mt-7
                "
      >
        <DifficultyBox label="Easy" value={data.easy} />

        <DifficultyBox label="Medium" value={data.medium} />

        <DifficultyBox label="Hard" value={data.hard} />
      </div>

      {/* Contest information */}

      <div
        className="
                    grid
                    grid-cols-2
                    gap-3
                    mt-5
                "
      >
        <StatBox
          label="Contest Rating"
          value={data.rating ? Math.round(data.rating) : "—"}
        />

        <StatBox label="Contests" value={data.attendedContests} />

        <StatBox
          label="Global Ranking"
          value={data.globalRanking ? data.globalRanking.toLocaleString() : "—"}
        />

        <StatBox
          label="Top"
          value={data.topPercentage ? `${data.topPercentage}%` : "—"}
        />
      </div>
    </motion.div>
  );
};

/* ============================================================
   SMALL COMPONENTS
============================================================ */

const DifficultyBox = ({ label, value }) => {
  return (
    <div
      className="
                rounded-xl
                bg-white/70
                border
                border-black/5
                p-4
            "
    >
      <span
        className="
                    block
                    text-xs
                    font-bold
                    text-black/40
                "
      >
        {label}
      </span>

      <strong
        className="
                    block
                    mt-1
                    text-2xl
                    font-black
                    text-black
                "
      >
        {value}
      </strong>
    </div>
  );
};

const StatBox = ({ label, value }) => {
  return (
    <div
      className="
                rounded-xl
                bg-white/60
                border
                border-black/5
                p-4
            "
    >
      <span
        className="
                    block
                    text-[10px]
                    uppercase
                    tracking-wider
                    text-black/40
                "
      >
        {label}
      </span>

      <strong
        className="
                    block
                    mt-1
                    text-lg
                    font-black
                    text-black
                "
      >
        {value}
      </strong>
    </div>
  );
};

export default CodingStats;
