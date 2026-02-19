import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: "~10%", numeric: 10, prefix: "~", suffix: "%", label: "Perf Improvement" },
  { value: "~30%", numeric: 30, prefix: "~", suffix: "%", label: "Revenue Increase" },
  { value: "<100KB", numeric: 100, prefix: "<", suffix: "KB", label: "Bundle Chunks" },
  { value: "~8MB", numeric: 8, prefix: "~", suffix: "MB", label: "Deps Eliminated" },
];

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

const AnimatedValue = ({
  numeric,
  prefix,
  suffix,
  triggered,
}: {
  numeric: number;
  prefix: string;
  suffix: string;
  triggered: boolean;
}) => {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!triggered) return;
    const duration = 800;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOut(progress);
      setDisplay(Math.round(eased * numeric));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [triggered, numeric]);

  return (
    <span>
      {prefix}
      {triggered ? display : 0}
      {suffix}
    </span>
  );
};

const ImpactMetrics = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-2 gap-2">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="bg-raised border border-edge rounded-lg px-3 py-2.5"
        >
          <div className="font-mono text-lg text-primary font-medium">
            <AnimatedValue
              numeric={metric.numeric}
              prefix={metric.prefix}
              suffix={metric.suffix}
              triggered={triggered}
            />
          </div>
          <div className="font-mono text-[11px] text-muted uppercase tracking-wider">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImpactMetrics;
