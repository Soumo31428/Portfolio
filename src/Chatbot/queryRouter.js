const includesAny = (text, terms) => terms.some((term) => text.includes(term))

export function detectQueryType(question = '') {
  const q = question.toLowerCase()

  if (includesAny(q, ['how long', 'total experience', 'years of experience', 'how many years', 'since when', 'when did', 'started'])) {
    return 'experience'
  }

  if (includesAny(q, ['project', 'projects', 'case study', 'build'])) {
    return 'project'
  }

  if (includesAny(q, ['experience', 'work', 'worked', 'intern', 'career', 'role'])) {
    return 'experience'
  }

  if (includesAny(q, ['skill', 'skills', 'technology', 'technologies', 'stack', 'framework'])) {
    return 'skills'
  }

  if (includesAny(q, ['certification', 'certificate', 'udemy', 'oracle', 'agentic', 'coursera', 'deeplearning', 'neural'])) {
    return 'certification'
  }

  if (includesAny(q, ['education', 'degree', 'b.tech', 'btech', 'study', 'cgpa', 'school'])) {
    return 'education'
  }

  if (includesAny(q, ['achievement', 'award', 'scholarship', 'hackathon', 'sih', 'nmmse'])) {
    return 'achievement'
  }

  if (includesAny(q, ['contact', 'email', 'phone', 'github', 'linkedin', 'reach'])) {
    return 'contact'
  }

  if (includesAny(q, ['who is', 'about him', 'about souvik', 'overview', 'profile'])) {
    return 'profile'
  }

  return 'general'
}

export function resolveCategoriesForQuery(queryType) {
  switch (queryType) {
    case 'project':
      return ['project']
    case 'experience':
      return ['experience']
    case 'skills':
      return ['skills', 'project']
    case 'certification':
      return ['certification']
    case 'education':
      return ['experience']
    case 'achievement':
      return ['achievement', 'experience']
    case 'contact':
      return ['contact']
    case 'profile':
      return ['profile', 'experience', 'skills']
    default:
      return ['profile', 'skills', 'experience', 'project', 'certification', 'achievement', 'contact']
  }
}
