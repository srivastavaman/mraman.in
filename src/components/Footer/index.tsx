import { useEffect, useState } from "react";


export default function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const visited = sessionStorage.getItem('visited');
  
    if (!visited) {
      fetch('/api/visitor')
        .then((res) => res.json())
        .then((data) => setCount(data.count));
      sessionStorage.setItem('visited', 'true');
    } else {
      // Just fetch the count without incrementing
      fetch('/api/visitor?read=true')
        .then((res) => res.json())
        .then((data) => setCount(data.count));
    }
  }, []);

  return (
    <footer className="relative z-10 bg-slate-950 pt-10 text-gray-400 md:pt-14 lg:pt-16">
      <div className="container mx-auto px-4">
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>

        {/* Content Block */}
        <div className="flex flex-col items-center justify-center py-6">
  {/* Visitor Count */}
  <div className="mb-2 text-center">
    👣 Visitors:{" "}
    <strong>
      {typeof count === "number" ? count.toLocaleString() : "Updating..."}
    </strong>
    {count === 5 && (
      <div className="text-yellow-400 mt-1 font-medium">
        👣 5th Visitor Test!
      </div>
    )}
  </div>

  {/* Copyright - Centered */}
  <div className="text-center text-base">
    © Copyright 2025 by{" "}
    <a
      href="https://mraman.in"
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-blue-400 transition duration-200 hover:text-blue-500"
    >
      Mr. Aman 
    </a>
  </div>
</div>

      </div>
    </footer>
  );
}

// export default Footer;
