import React from 'react';
import { TimeSlot } from '../types';
import { Clock } from 'lucide-react';
import { formatTime } from '../utils/dateUtils';

interface TimeSlotPickerProps {
  timeSlots: TimeSlot[];
  selectedTimeSlot: TimeSlot | null;
  onChange: (timeSlot: TimeSlot) => void;
  hasError?: boolean;
}

const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({ 
  timeSlots, 
  selectedTimeSlot, 
  onChange,
  hasError = false
}) => {
  // Group time slots by morning, afternoon, evening
  const morningSlots = timeSlots.filter(slot => {
    const hour = parseInt(slot.start.split(':')[0]);
    return hour >= 8 && hour < 12;
  });
  
  const afternoonSlots = timeSlots.filter(slot => {
    const hour = parseInt(slot.start.split(':')[0]);
    return hour >= 12 && hour < 17;
  });
  
  const eveningSlots = timeSlots.filter(slot => {
    const hour = parseInt(slot.start.split(':')[0]);
    return hour >= 17 && hour <= 20;
  });
  
  const renderTimeSlots = (slots: TimeSlot[], title: string) => {
    if (slots.length === 0) return null;
    
    return (
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">{title}</h4>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          {slots.map((slot) => {
            const isSelected = selectedTimeSlot && 
              selectedTimeSlot.start === slot.start && 
              selectedTimeSlot.end === slot.end;
            
            return (
              <button
                key={`${slot.start}-${slot.end}`}
                type="button"
                onClick={() => onChange(slot)}
                className={`flex items-center justify-center py-2 px-3 rounded-md text-sm transition-colors ${
                  isSelected
                    ? 'bg-cyan-600 text-white'
                    : slot.available
                      ? 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-60'
                }`}
                disabled={!slot.available}
              >
                <Clock className={`h-3 w-3 mr-1 ${isSelected ? 'text-white' : 'text-gray-500'}`} />
                {formatTime(slot.start)}
              </button>
            );
          })}
        </div>
      </div>
    );
  };
  
  return (
    <div className={`p-4 rounded-md border ${hasError ? 'border-red-500' : 'border-gray-300'}`}>
      {renderTimeSlots(morningSlots, 'Morning')}
      {renderTimeSlots(afternoonSlots, 'Afternoon')}
      {renderTimeSlots(eveningSlots, 'Evening')}
      
      {timeSlots.length === 0 && (
        <p className="text-gray-500 text-center py-4">No available time slots for this date</p>
      )}
    </div>
  );
};

export default TimeSlotPicker;