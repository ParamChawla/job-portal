import Job from "../models/job.model.js";

export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      location,
      salary,
      jobType,
      experience,
      position,
      companyId
    } = req.body;

    const userId = req.id;

    if (
      !title ||
      !description ||
      !requirements ||
      !location ||
      !salary ||
      !jobType ||
      !experience ||
      !position ||
      !companyId
    ) {
      return res.status(400).json({
        message: "All fields are required",
        success: false
      });
    }

    const job = await Job.create({
      title,
      description,
      requirements: requirements.split(",").map(r => r.trim()),
      jobType,
      experienceLevel: Number(experience),
      position: Number(position),
      location,
      salary: Number(salary),
      company: companyId,
      created_by: userId
    });

    return res.status(201).json({
      message: "Job posted successfully",
      success: true,
      job
    });

  } catch (error) {
    console.log(error);
    // ✅ FIX: was missing — caused infinite loading on any error
    return res.status(500).json({
      message: error.message || "Internal server error",
      success: false
    });
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";

    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } }
      ]
    };

    const jobs = await Job.find(query)
      .populate("company")
      .populate("created_by", "fullname email");

    return res.status(200).json({
      message: "Jobs found",
      success: true,
      jobs
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Internal server error",
      success: false
    });
  }
};

export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;

    const job = await Job.findById(jobId)
      .populate("company")
      .populate("created_by", "fullname email");

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false
      });
    }

    return res.status(200).json({
      message: "Job found",
      success: true,
      job
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Internal server error",
      success: false
    });
  }
};

export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;

    const jobs = await Job.find({ created_by: adminId })
      .populate("company")
      .populate("created_by", "fullname email");

    return res.status(200).json({
      message: "Jobs found",
      success: true,
      jobs
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message || "Internal server error",
      success: false
    });
  }
};