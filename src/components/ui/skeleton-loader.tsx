import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  variant?: "default" | "card" | "text" | "avatar" | "button";
  animate?: boolean;
}

const Skeleton = ({ className, variant = "default", animate = true, ...props }: SkeletonProps) => {
  const baseClasses = "bg-muted rounded-md";
  const animateClasses = animate ? "skeleton" : "";
  
  const variantClasses = {
    default: "h-4 w-full",
    card: "h-48 w-full",
    text: "h-4 w-3/4",
    avatar: "h-10 w-10 rounded-full",
    button: "h-10 w-24",
  };

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        animateClasses,
        className
      )}
      {...props}
    />
  );
};

// Loading States
export const CardSkeleton = () => (
  <div className="space-y-4 p-6 border rounded-lg">
    <div className="flex items-center space-x-4">
      <Skeleton variant="avatar" />
      <div className="space-y-2">
        <Skeleton variant="text" />
        <Skeleton className="w-1/2" />
      </div>
    </div>
    <div className="space-y-2">
      <Skeleton />
      <Skeleton />
      <Skeleton className="w-3/4" />
    </div>
  </div>
);

export const ServiceCardSkeleton = () => (
  <div className="space-y-4 p-6 border rounded-lg hover-lift">
    <Skeleton variant="avatar" className="h-16 w-16 mx-auto" />
    <div className="space-y-2 text-center">
      <Skeleton className="h-6 w-3/4 mx-auto" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6 mx-auto" />
    </div>
    <div className="space-y-2">
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-4/5" />
      <Skeleton className="h-3 w-3/4" />
    </div>
  </div>
);

export const TestimonialSkeleton = () => (
  <div className="space-y-4 p-6 border rounded-lg">
    <Skeleton className="h-6 w-6" />
    <div className="space-y-2">
      <Skeleton />
      <Skeleton />
      <Skeleton className="w-3/4" />
    </div>
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Skeleton key={i} className="h-4 w-4" />
      ))}
    </div>
    <div className="space-y-1">
      <Skeleton className="h-4 w-1/3" />
      <Skeleton className="h-3 w-1/2" />
    </div>
  </div>
);

export const PageSkeleton = () => (
  <div className="space-y-8">
    {/* Hero Section Skeleton */}
    <div className="space-y-6 text-center py-20">
      <Skeleton className="h-8 w-64 mx-auto" />
      <Skeleton className="h-16 w-3/4 mx-auto" />
      <Skeleton className="h-6 w-1/2 mx-auto" />
      <div className="flex justify-center space-x-4">
        <Skeleton variant="button" />
        <Skeleton variant="button" />
      </div>
    </div>
    
    {/* Services Grid Skeleton */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[...Array(4)].map((_, i) => (
        <ServiceCardSkeleton key={i} />
      ))}
    </div>
  </div>
);

export default Skeleton;
