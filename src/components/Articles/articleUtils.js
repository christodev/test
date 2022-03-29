export const truncateArticleBody = (body, number) => {
  if (body.length <= number) return body
  return `${body.slice(0, number)}...`
}
