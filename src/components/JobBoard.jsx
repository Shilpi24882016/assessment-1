function JobBoard({ jobs }) {
    return (
        <div style={{ padding: "20px" }}>
            <h2>Job Listings</h2>

            {jobs.map((job, index) => (
                <div
                    key={index}
                    style={{
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        margin: "10px 0",
                        padding: "15px"
                    }}
                >
                    <h3>{job.post}</h3>
                    <p>{job.company}</p>
                    <p><strong>{job.salary}</strong></p>
                </div>
            ))}
        </div>
    )
}

export default JobBoard