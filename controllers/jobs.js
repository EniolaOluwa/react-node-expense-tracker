// @desc Fetch a job post
// @route GET /api/v1/job
// @access Public
export const getMockListing = (req, res, next) => {
  return res.status(200).json({
    id: 1,
    company_name: "Amazon",
    specialization: "Backend Developer",
    experience: 6,
    location: "Cape Town",
    main_tool: "Rails",
    job_url: "https://examplejobs.com",
  });
};
