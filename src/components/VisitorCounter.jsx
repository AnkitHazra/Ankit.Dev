import { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const updateVisitorCount = async () => {
      try {
        const response = await fetch("/api/visitor");

        if (!response.ok) {
          throw new Error(`Visitor API error: ${response.status}`);
        }

        const data = await response.json();

        console.log("Visitor count response:", data);

        setCount(data.data?.up_count ?? 0);
      } catch (error) {
        console.error("Visitor counter error:", error);
      }
    };

    updateVisitorCount();
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 mt-6 mb-6 text-sm text-black/45">
      <span className="text-base transition-transform duration-300 hover:scale-110">
        👁
      </span>

      <span>
        Visitors:{" "}
        <strong className="font-semibold text-black/70">
          {count !== null ? count.toLocaleString() : "Loading..."}
        </strong>
      </span>
    </div>
  );
};

export default VisitorCounter;