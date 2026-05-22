export default function Ticker() {
  const items = [
    "NIFTY 24,850 ▲",
    "BANKNIFTY 52,340 ▼",
    "SENSEX 81,200 ▲",
    "FINNIFTY 23,100 ▲",
    "MIDCPNIFTY 12,500 ▲",
  ];

  return (
    <div className="ticker-bar w-full bg-[#111111] text-accent-gold font-bold overflow-hidden whitespace-nowrap flex items-center h-[32px]">
      <div className="inline-block animate-ticker">
        {/* Double the items to create a seamless infinite scroll */}
        {[...items, ...items, ...items, ...items, ...items, ...items].map(
          (item, index) => {
            const isUp = item.includes("▲");
            return (
              <span
                key={index}
                className="inline-flex items-center mx-6 text-[11px] tracking-wider"
              >
                {item.split(" ")[0]}{" "}
                <span className="ml-1.5 font-mono text-white">
                  {item.split(" ")[1]}
                </span>
                <span
                  className={`ml-1.5 ${isUp ? "text-success" : "text-danger"}`}
                >
                  {item.split(" ")[2]}
                </span>
              </span>
            );
          },
        )}
      </div>
    </div>
  );
}
