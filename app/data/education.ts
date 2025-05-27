export interface Education {
    degree: string;
    school: string;
    location: string;
    startDate: string;
    endDate: string;
    cgpa?: string;
    grade?: string;
}
  
export const education: Education[] = [
    {
        degree: "B.Tech",
        school: "Vellore Institue of technology",
        location: "Chennai",
        startDate: "2023",
        endDate: "Present",
    },
    {
        degree: "MPC",
        school: "Resonance",
        location: "Hyderabad",
        startDate: "2021",
        endDate: "2023",
        grade: "95%"
    },
    {
        degree: "10th",
        school: "Delhi Public School",
        location: "Warangal",
        startDate: "2014",
        endDate: "2021",
        grade: "95%"
    },
];