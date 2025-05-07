import React from 'react';
import { format, addDays, isToday, startOfDay } from 'date-fns';
import { Calendar } from 'lucide-react';

interface DatePickerProps {
  selectedDate: Date | null;
  onChange: (date: Date) => void;
  hasError?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, onChange, hasError = false }) => {
  const today = startOfDay(new Date());
  const dates = Array.from({ length: 14 }, (_, i) => addDays(today, i));
  
  return (
    <div>
      <div className={`inline-flex items-center p-1 rounded-md border ${hasError ? 'border-red-500' : 'border-gray-300'}`}>
        <Calendar className="h-5 w-5 text-gray-400 ml-2" />
        <div className="overflow-x-auto flex py-2 px-1 scrollbar-hide">
          {dates.map((date) => {
            const dayFormat = format(date, 'EEE');
            const dayNumber = format(date, 'd');
            const isSelected = selectedDate && startOfDay(selectedDate).getTime() === date.getTime();
            
            return (
              <button
                key={date.toISOString()}
                type="button"
                onClick={() => onChange(date)}
                className={`flex flex-col items-center justify-center min-w-[4rem] h-16 mx-1 rounded-md transition-colors ${
                  isSelected
                    ? 'bg-cyan-600 text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                <span className={`text-xs font-medium ${isSelected ? 'text-white' : 'text-gray-500'}`}>
                  {dayFormat}
                </span>
                <span className={`text-lg ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                  {dayNumber}
                </span>
                {isToday(date) && !isSelected && (
                  <span className="text-xs text-cyan-600 font-medium">Today</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DatePicker;