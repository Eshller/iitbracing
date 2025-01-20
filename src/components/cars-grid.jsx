import { BentoGrid, BentoGridItem } from "./bento-grid";

export function CarGrid() {
    return (
        (<BentoGrid className="max-w-6xl mx-auto">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    header={item.header}
                    className={i === 3 || i === 6 ? "md:col-span-2" : ""} />
            ))}
        </BentoGrid>)
    );
}
const Skeleton = ({ img }) => (
    <div
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-white">
        <img src={img} className="w-full h-full object-cover" alt="" />
    </div>
);
const items = [
    {
        title: "EvoK",
        header: <Skeleton img="/c1.jpeg" />,
    },
    {
        title: "EvoX",
        header: <Skeleton img="/c2.jpeg" />,
    },
    {
        title: "Etherion",
        header: <Skeleton img="/c3.jpeg" />,
    },
    {
        title: "Evo2",
        header: <Skeleton img="/c4.jpeg" />,
    },
    {
        title: "Evo3",
        header: <Skeleton img="/c5.jpg" />,
    },
    {
        title: "Evol",
        header: <Skeleton img="/c6.jpeg" />,
    },
    {
        title: "Vayu",
        header: <Skeleton img="/c10.jpg" />,
    },
    {
        title: "Orca",
        header: <Skeleton img="/c11.jpeg" />,
    },
    {
        title: "EvoLV",
        header: <Skeleton img="/c12.jpeg" />,
    },
    {
        title: "Prithvi 1",
        header: <Skeleton img="/c7.jpeg" />,
    },
    {
        title: "Prithvi 2",
        header: <Skeleton img="/c8.png" />,
    },
];
