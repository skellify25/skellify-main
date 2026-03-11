import ProgramCard, { type Program } from "@/components/ProgramCard";
import { internships } from "@/constants/program";


export default function InternshipCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {internships.map((internship, i) => (
                <ProgramCard key={internship.title} program={internship} index={i} />
            ))}
        </div>
    );
}