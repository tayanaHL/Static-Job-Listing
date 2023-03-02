const data = require('./data.json');

  
  const SearchData = data.map((job) => {
    return {
        id: job.id,
        company: job.company,
        logo: job.logo,
        newJob: job.new,
        featured: job.featured,
        position: job.position,
        role: job.role,
        level: job.level,
        postedAt: job.postedAt,
        contract: job.contract,
        location: job.location,
        languages: job.languages,
        tools: job.tools
    }
  }).filter(job => {
    return job.company.toLowerCase() === selectedCompany &&
     job.position.toLowerCase() === selectedPosition &&
     job.role.toLowerCase() === selectedRole &&
     job.level.toLowerCase() === selectedLevel &&
     job.contract.toLowerCase() === selectedContract &&
     job.location.toLowerCase() === selectedLocation &&
     job.languages.toLowerCase() === selectedLanguages &&
     job.tools.toLowerCase() === selectedTools
    
  }
    )