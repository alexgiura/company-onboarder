interface StepProgressProps {
  current: number;
  total: number;
}

const StepProgress = ({ current, total }: StepProgressProps) => (
  <div className="mb-8">
    <p className="text-sm font-medium text-muted-foreground mb-2">
      {current} din {total} etape
    </p>
    <div className="flex gap-1.5">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
            i < current
              ? "bg-progress-fill"
              : "bg-progress-inactive"
          }`}
        />
      ))}
    </div>
  </div>
);

export default StepProgress;
