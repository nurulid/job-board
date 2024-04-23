//** FUNCTION LIBRARY */

// capitalize first letter
export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// current year
export function currentYear() {
  return new Date().getFullYear();
}

export function formatDateFromTimestamp(timestamp) {
  // Create a new Date object from the Unix timestamp
  const date = new Date(timestamp * 1000); // Multiply by 1000 because JS Date uses milliseconds

  // Define the names of months
  const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  // Get the various date components
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  // Format the date as desired
  const formattedDate = `${month} ${day}, ${year}`;

  return formattedDate;
}

// Get first character only the first two words
export function getFirstCharacter(names) {
  return names
      .split(' ')
      .slice(0, 2) // Get only the first two words
      .map(word => word.charAt(0))
      .join('');
}
  
  