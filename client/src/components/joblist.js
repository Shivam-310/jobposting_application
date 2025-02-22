import JobPost from "./jobpost";

const jobData = [
  {
    logo: "https://via.placeholder.com/50",
    title: "Frontend Developer",
    location: "Delhi",
    salary: "₹50,000",
    tags: ["Frontend", "CSS", "JavaScript", "HTML"],
    type: "Full time",
    mode: "Office",
  },
  {
    logo: "https://via.placeholder.com/50",
    title: "WordPress Developer",
    location: "Bangalore",
    salary: "₹25,000",
    tags: ["CSS", "HTML", "WordPress"],
    type: "Full time",
    mode: "Remote",
  },
  {
    logo: "https://via.placeholder.com/50",
    title: "Frontend Developer",
    location: "Mumbai",
    salary: "₹35,000",
    tags: ["Frontend", "CSS", "JavaScript", "HTML"],
    type: "Full time",
    mode: "Office",
  },
];

function JobList() {
  return (
    <div className="container mx-auto p-6">
      {jobData.map((job, index) => (
        <JobPost key={index} {...job} />
      ))}
    </div>
  );
}

export default JobList;
