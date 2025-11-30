// ATS Keywords database
export const keywordsDatabase = {
  'Data Science & Analytics': [
    'python', 'r', 'sql', 'pandas', 'numpy', 'scikit-learn', 'tensorflow',
    'data analysis', 'statistical analysis', 'machine learning', 'data visualization',
    'tableau', 'power bi', 'excel', 'statistics', 'analytics', 'big data', 'hadoop',
    'spark', 'jupyter', 'matplotlib', 'seaborn', 'predictive modeling', 'regression',
    'classification', 'clustering', 'data mining', 'business intelligence'
  ],
  'AI & Machine Learning': [
    'machine learning', 'deep learning', 'neural networks', 'nlp', 'computer vision',
    'tensorflow', 'pytorch', 'keras', 'scikit-learn', 'reinforcement learning',
    'natural language processing', 'image recognition', 'model training', 'model deployment',
    'algorithm design', 'optimization', 'feature engineering', 'hyperparameter tuning',
    'transfer learning', 'cnn', 'rnn', 'lstm', 'transformer', 'bert', 'gpt'
  ],
  'Cybersecurity': [
    'security', 'encryption', 'firewall', 'penetration testing', 'vulnerability assessment',
    'network security', 'information security', 'compliance', 'iso 27001', 'siem',
    'intrusion detection', 'malware analysis', 'threat management', 'security audit',
    'risk assessment', 'incident response', 'ssl/tls', 'vpn', 'authentication',
    'authorization', 'zero trust', 'cyber threat intelligence'
  ],
  'Cloud Computing': [
    'aws', 'azure', 'gcp', 'cloud', 'ec2', 's3', 'lambda', 'rds', 'dynamodb',
    'cloudformation', 'terraform', 'docker', 'kubernetes', 'cloud architecture',
    'scalability', 'availability', 'reliability', 'cost optimization', 'security',
    'monitoring', 'logging', 'cloudwatch', 'azure monitor', 'application insights'
  ],
  'DevOps': [
    'devops', 'ci/cd', 'jenkins', 'gitlab', 'github', 'docker', 'kubernetes',
    'terraform', 'ansible', 'configuration management', 'infrastructure as code',
    'containerization', 'orchestration', 'monitoring', 'logging', 'prometheus',
    'grafana', 'elk stack', 'splunk', 'continuous integration', 'continuous deployment'
  ],
  'Software Development': [
    'java', 'python', 'javascript', 'c++', 'c#', '.net', 'react', 'angular', 'vue',
    'nodejs', 'spring boot', 'django', 'flask', 'rest api', 'graphql', 'database',
    'sql', 'nosql', 'mongodb', 'postgresql', 'git', 'agile', 'scrum', 'microservices'
  ],
  'Database': [
    'sql', 'nosql', 'postgresql', 'mysql', 'oracle', 'mongodb', 'cassandra',
    'database design', 'indexing', 'query optimization', 'replication', 'backup',
    'recovery', 'dba', 'administration', 'performance tuning', 'data integrity'
  ]
};

export const atsKeywords = [
  // General technical skills
  'technical skills', 'programming', 'coding', 'software', 'development',
  'engineering', 'architecture', 'design', 'implementation', 'deployment',
  
  // Experience
  'experience', 'years', 'project', 'team', 'led', 'managed', 'developed',
  'designed', 'implemented', 'deployed', 'maintained', 'optimized',
  
  // Education
  'bachelor', 'master', 'degree', 'university', 'education', 'certified',
  'certification', 'diploma',
  
  // Certifications (high weight)
  'certified', 'certification', 'professional', 'associate', 'expert',
  
  // Soft skills
  'communication', 'leadership', 'teamwork', 'problem-solving', 'analytical',
  'attention to detail', 'organizational', 'time management'
];

export const calculateATSScore = (resumeText) => {
  if (!resumeText || resumeText.trim().length === 0) {
    return { score: 0, matches: [], analysis: { strengths: [], weaknesses: [] } };
  }

  const lowerText = resumeText.toLowerCase();
  const matches = [];
  let score = 0;

  // Check for resume sections (required)
  const sections = {
    'contact information': /(\+?[\d\s\-()]{10,}|[\w\.-]+@[\w\.-]+\.\w+)/,
    'summary/objective': /(summary|objective|professional summary|about)/i,
    'experience': /(experience|employment|work history|professional experience)/i,
    'education': /(education|degree|university|college|school)/i,
    'skills': /(skills|competencies|technical skills|expertise)/i
  };

  const foundSections = [];
  Object.entries(sections).forEach(([section, pattern]) => {
    if (pattern.test(lowerText)) {
      foundSections.push(section);
      score += 8;
    }
  });

  // Check for keywords
  const foundKeywords = [];
  atsKeywords.forEach(keyword => {
    if (lowerText.includes(keyword.toLowerCase())) {
      foundKeywords.push(keyword);
      score += 2;
    }
  });

  // Check for domain-specific keywords with higher weight
  Object.entries(keywordsDatabase).forEach(([domain, keywords]) => {
    keywords.forEach(keyword => {
      if (lowerText.includes(keyword.toLowerCase())) {
        score += 3;
      }
    });
  });

  // Check for formatting quality
  const lines = resumeText.split('\n').length;
  const words = resumeText.split(/\s+/).length;
  
  if (words >= 200 && words <= 1000) score += 5;
  if (lines >= 15 && lines <= 60) score += 5;

  // Check for action verbs (high value)
  const actionVerbs = [
    'achieved', 'improved', 'increased', 'decreased', 'led', 'managed',
    'developed', 'designed', 'implemented', 'optimized', 'resolved',
    'established', 'created', 'built', 'engineered', 'transformed'
  ];

  let actionVerbCount = 0;
  actionVerbs.forEach(verb => {
    const regex = new RegExp(`\\b${verb}\\b`, 'gi');
    const matches = resumeText.match(regex);
    if (matches) {
      actionVerbCount += matches.length;
      score += matches.length * 2;
    }
  });

  // Quantifiable achievements
  const quantifiablePattern = /(\d+%|\$\d+|increased by \d+|improved by \d+)/gi;
  const quantifiableMatches = resumeText.match(quantifiablePattern);
  if (quantifiableMatches) {
    score += quantifiableMatches.length * 5;
  }

  // Cap score at 100
  score = Math.min(score, 100);

  // Build analysis
  const strengths = [];
  const weaknesses = [];

  if (foundSections.includes('summary/objective')) {
    strengths.push('✓ Professional summary/objective present');
  } else {
    weaknesses.push('✗ Missing professional summary/objective');
  }

  if (foundSections.includes('experience')) {
    strengths.push('✓ Work experience section found');
  } else {
    weaknesses.push('✗ No work experience section');
  }

  if (foundSections.includes('education')) {
    strengths.push('✓ Education section included');
  } else {
    weaknesses.push('✗ Missing education section');
  }

  if (foundSections.includes('skills')) {
    strengths.push('✓ Skills section present');
  } else {
    weaknesses.push('✗ No dedicated skills section');
  }

  if (actionVerbCount >= 8) {
    strengths.push(`✓ Strong action verbs (${actionVerbCount} found)`);
  } else if (actionVerbCount > 0) {
    weaknesses.push(`⚠ Limited action verbs (${actionVerbCount} found, aim for 10+)`);
  } else {
    weaknesses.push('✗ No action verbs found');
  }

  if (quantifiableMatches) {
    strengths.push(`✓ Quantifiable achievements (${quantifiableMatches.length} found)`);
  } else {
    weaknesses.push('✗ Add quantifiable metrics (e.g., percentages, dollar amounts)');
  }

  if (words >= 200 && words <= 1000) {
    strengths.push(`✓ Optimal word count (${words} words)`);
  } else if (words < 200) {
    weaknesses.push(`⚠ Resume too short (${words} words, aim for 200-1000)`);
  } else {
    weaknesses.push(`⚠ Resume too long (${words} words, aim for 200-1000)`);
  }

  return {
    score: Math.round(score),
    matches: foundKeywords,
    analysis: {
      strengths,
      weaknesses
    }
  };
};

export const getExpiryStatus = (expiryDate) => {
  const today = new Date();
  const expiry = new Date(expiryDate);
  const daysUntilExpiry = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24));

  if (daysUntilExpiry < 0) {
    return { status: 'expired', days: Math.abs(daysUntilExpiry), message: 'EXPIRED' };
  } else if (daysUntilExpiry <= 30) {
    return { status: 'expiring-soon', days: daysUntilExpiry, message: `${daysUntilExpiry} days left` };
  } else if (daysUntilExpiry <= 90) {
    return { status: 'expiring-warning', days: daysUntilExpiry, message: `${daysUntilExpiry} days left` };
  } else {
    return { status: 'active', days: daysUntilExpiry, message: `${daysUntilExpiry} days left` };
  }
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};
