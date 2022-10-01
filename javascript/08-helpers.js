const tech = 'Node.js'
const array = [ 'nodejs', 'react', 'typescript']

// helpers são case sensitive
const includes = tech.includes('.');
const includesArray = array.includes('react');
const startsWith = tech.startsWith('No')
const endsWith = tech.endsWith('s')

console.log({endsWith});