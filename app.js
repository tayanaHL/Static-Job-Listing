let selectedCompany = ['Photosnap', 'Manage', 'Account', 'MyHome', 'Loop Studios', 'FaceIt', 'Shortly', 'Insure', 'Eyecam Co.', 'The Air Filter Company'];

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    if (!selectedCompany) {
      return;
    }
    const searchData = data.map((job) => {
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
        languages: job.languages.join(', ').toLowerCase(),
        tools: job.tools.join(', ').toLowerCase(),
      };
    }).filter(job => {
      return job.company.toLowerCase() === selectedCompany &&
        job.position.toLowerCase() === selectedPosition &&
        job.role.toLowerCase() === selectedRole &&
        job.level.toLowerCase() === selectedLevel &&
        job.contract.toLowerCase() === selectedContract &&
        job.location.toLowerCase() === selectedLocation &&
        job.languages.includes(selectedLanguages.toLowerCase()) &&
        job.tools.includes(selectedTools.toLowerCase())
    });
  
    const jobListingsContainer = document.querySelector('.job-listings');
  
    function createJobListing(job) {
      // create job listing element
      const jobListing = document.createElement('div');
      jobListing.classList.add('job-listing');
  
      // create logo element
      const logo = document.createElement('div');
      logo.classList.add('logo');
      const logoImg = document.createElement('img');
      logoImg.src = job.logo;
      logoImg.alt = `${job.company} logo`;
      logo.appendChild(logoImg);
      jobListing.appendChild(logo);
  
      // create job details element
      const jobDetails = document.createElement('div');
      jobDetails.classList.add('job-details');
  
      // create top row element
      const topRow = document.createElement('div');
      topRow.classList.add('top-row');
      const company = document.createElement('span');
      company.classList.add('company');
      company.textContent = job.company;
      topRow.appendChild(company);
      if (job.newJob) {
        const newJob = document.createElement('span');
        newJob.classList.add('new-job');
        newJob.textContent = 'New!';
        topRow.appendChild(newJob);
      }
      if (job.featured) {
        const featured = document.createElement('span');
        featured.classList.add('featured');
        featured.textContent = 'Featured';
        topRow.appendChild(featured);
      }
      jobDetails.appendChild(topRow);
  
      // create position element
      const position = document.createElement('div');
      position.classList.add('position');
      position.textContent = job.position;
      jobDetails.appendChild(position);
  
      // create job details row element
      const jobDetailsRow = document.createElement('div');
      jobDetailsRow.classList.add('job-details-row');
      const postedAt = document.createElement('p');
      postedAt.classList.add('posted-at');
      postedAt.textContent = job.postedAt;
      jobDetailsRow.appendChild(postedAt);
      const contract = document.createElement('p');
      contract.classList.add('contract');
      contract.textContent = job.contract;
      jobDetailsRow.appendChild(contract);
      const location = document.createElement('p');
      location.classList.add('location');
      location.textContent = job.location;
      jobDetailsRow.appendChild(location);
      jobDetails.appendChild(jobDetailsRow);
  
      // create job tags

  const jobTags = document.createElement('div');
  jobTags.classList.add('job-tags');
  if (job.languages) {
    const languages = document.createElement('p');
    languages.classList.add('languages');
    languages.textContent = job.languages;
    jobTags.appendChild(languages);
    jobDetails.appendChild(jobTags);
  }}

  // loop through searchData array and create job listings
searchData.forEach((job) => {
  const jobListing = createJobListing(job);
  jobListingsContainer.appendChild(jobListing);
})
  });
