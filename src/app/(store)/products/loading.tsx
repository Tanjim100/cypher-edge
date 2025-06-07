import { Skeleton } from "@/components/ui/skeleton"

export default function Load()
{
    return (
        <div className="text-7xl">
            <Skeleton className="h-[20px] w-[100px] rounded-full" />
        </div>
    )
}