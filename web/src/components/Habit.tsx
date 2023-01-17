
interface HabitProps {
    completed: number
}

export function Habit(props: HabitProps) {
    return (
        <div className="bg-slate-500 w-10 h-10 text-white rounded m-2 flex items-center justify-center">{props.completed}</div>
    )
}