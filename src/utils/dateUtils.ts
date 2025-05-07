import { format } from 'date-fns';

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return format(date, 'EEEE, MMMM d, yyyy');
};

export const formatTime = (timeString: string): string => {
  const [hours, minutes] = timeString.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
};