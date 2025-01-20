import { cn } from "../lib/utils";


export const BentoGrid = ({
    className,
    children
}) => {
    return (
        (<div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-8xl mx-auto ",
                className
            )}>
            {children}
        </div>)
    );
};

export const BentoGridItem = ({
    className,
    title,
    header
}) => {
    return (
        (<div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 border-gray-400 bg-white border  justify-between flex flex-col space-y-4",
                className
            )}>
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                <div
                    className="font-sans font-bold text-neutral-600 mb-2 mt-2">
                    {title}
                </div>
            </div>
        </div>)
    );
};
