export const formatDate = (date) => {
  const formattedDate = new Date(date).toLocaleDateString("en-EN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formattedDate;
};

export const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  } else {
    return text;
  }
};
export const truncateMarkdown = (markdown, length) => {
  const imageRegex = /!\[.*\]\(.*\)/g;
  markdown = markdown.replace(imageRegex, "");
  if (markdown.length <= length) {
    return markdown;
  }

  return markdown.slice(0, length) + "...";
};
