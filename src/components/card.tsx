interface CardProps {
    header: string,
    description: string,
    footer: string,
}

export default function Card(props: CardProps) {
    return (
        <div className="border w-full p-6 rounded-2xl bg-neutral-800 border-neutral-600">
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-bold">{props.header}</h1>
                <p className="text-base text-neutral-400">{props.description}</p>
                <p className="text-base text-neutral-400">{props.footer}</p>
            </div>
        </div>
    )
}