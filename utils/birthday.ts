const year = 31536000000 // 365 * 24 * 60 * 60 * 1000

function getBirthday(): number {
  return Math.floor((new Date().getTime() - new Date('2005-09-12').getTime()) / year)
}

export default getBirthday